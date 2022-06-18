import os
from flask import Flask
from dotenv import load_dotenv
import tweepy
import json

load_dotenv()

app = Flask(__name__, static_folder='./build', static_url_path='/')

bearer_token = os.getenv('bearer_toekn_id')
cosumer_key = os.getenv('consumer_key')
consumer_secret = os.getenv('consumer_secret')

access_token = os.getenv('access_token')
access_token_secret = os.getenv('access_token_secret')


client = tweepy.Client(bearer_token)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')


@app.errorhandler(tweepy.errors.BadRequest)
def handle_bad_request(e):
    return 'Invalid Username! Refresh Page to try again'


@app.route('/<username>')
def server(username):
    # Get the ID of the user
    user = client.get_user(username=username)
    user_id = user[0]['id']

    # Get most recent <100> tweets
    response = client.get_users_tweets(
        id=user_id, max_results=100, tweet_fields='public_metrics')

    tweets = []
    max_likes = 0
    max_id = ''
    for tweet in response.data:
        like_count = tweet['public_metrics']['like_count']
        if like_count > max_likes:
            max_id = str(tweet.id)
            max_likes = like_count

    tweet = client.get_tweet(id=max_id)
    tweets.append({'id': max_id, 'likes': max_likes,
                  'tweet': tweet[0]['text']})

    jsonData = json.dumps(tweets)
    return jsonData


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 5000))
