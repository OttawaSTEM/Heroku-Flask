from flask import render_template
from app import app

@app.route('/')
def index():
    user = {'username': 'Patrick'}
    posts = [
        {
            'author': {'username': 'Alvin'},
            'body': 'It is a beautiful day in Ottawa!'
        },
        {
            'author': {'username': 'Bruce'},
            'body': 'I\'m really glad to be part of Ottawa STEM Club!'
        }
    ]
    return render_template('index.html', title='Home', user=user, posts=posts)
