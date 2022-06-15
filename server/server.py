import os
from urllib import response
from flask import Flask
from dotenv import load_dotenv
import tweepy
import json

load_dotenv()

app = Flask(__name__)

bearer_token = os.getenv('bearer_toekn_id')
cosumer_key = os.getenv('consumer_key')
consumer_secret = os.getenv('consumer_secret')

access_token = os.getenv('access_token')
access_token_secret = os.getenv('access_token_secret')



client = tweepy.Client(bearer_token)

@app.route('/<username>')
def index(username):
    # Get the ID of the user
    user = client.get_user(username=username)
    user_id = user[0]['id']

    # Get most recent <50> tweets
    response = client.get_users_tweets(id=user_id, max_results=50, tweet_fields='public_metrics') 

    # Store tweet ID and like count in a dictonary with the id as they key. 

    tweets = {}
    for tweet in response.data:
        # Get the ID of the user
        tweets[tweet.id] = tweet['public_metrics']['like_count']

    # Sort Like counts in descending order. Result is a list of tuples
    sorted_tweets = sorted(tweets.items(), key=lambda x: x[1], reverse=True)
    
    
    # Get the tweets. For some weird reason, Chrome keeps re-ordering the tweets 
    # based on their ids so indexing it with i was a work-around


    response = []

    # i = 0
    for key in sorted_tweets:
        # tweet
        result = client.get_tweet(id=key[0])
        tweet = {'id': key[0], 'text': result[0]['text'], 'likes':key[1]}
        response.append(tweet)

        # response[i] = {key[0]: {'Tweet' : result[0]['text'], 'Likes':key[1]}}
        # i +=1

    jsonData = json.dumps(response)
    return jsonData

if __name__=='__main__':
    app.run(host='0.0.0.0', debug=True)
