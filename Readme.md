# Heroku Flask Deployment
## 1. Create python virual environment
$ python -m venv venv

## 2. Install pip pacakges
$ pip install -r requirements.txt

## 3. Setup Heroku account
create two configuration files for Heroku
1. runtime.txt
    python-3.7.6
2. Procfile
    web: gunicorn run:app


## 4. Install Heroku CLI
`https://devcenter.heroku.com/articles/heroku-cli`

## 5. Login to Heroku
$ heroku login

## 6. Create application in Heroku
$ heroku create [app_name]

## 7. Deploy or update app to Heroku
$ git push heroku master

## 8. Deploy or update app to Heroku
$ heroku open

## 9. List app in Heroku
$ heroku list

## 10. Check app in Heroku
$ heroku ps [-a app_name]

## 11. Destroy or delete app in Heroku
$ heroku apps:destroy [app_name]

## 12. Logout Heroku
$ heroku apps:destroy [app_name]