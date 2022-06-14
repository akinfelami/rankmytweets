import os
from flask import Flask
from dotenv import load_dotenv

load_dotenv()

# How to use .env 

GCP_PROJECT_ID = os.getenv('GCP_PROJECT_ID')
# SERVICE_ACCOUNT_FILE = os.getenv('SERVICE_ACCOUNT_FILE')
# STORAGE_BUCKET_NAME = os.getenv('STORAGE_BUCKET_NAME')

app = Flask(__name__)

@app.route('/results')
def index():
    return "Hello World"



if __name__=='__main__':
    app.run()
