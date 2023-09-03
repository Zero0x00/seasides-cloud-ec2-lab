from flask import Flask, render_template, request
import requests
app = Flask(__name__)

@app.route("/")
def home():
    return render_template('home.html')

@app.route('/pdf')
def example():
    url = request.args["url"]
    response = requests.get(url)
    response.raise_for_status()
    return response.content
