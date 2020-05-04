# Heroku Flask Deployment

## Create a 'Deploy to Heroku' Button
Create ```app.json``` file
```
{
    "name": "Heroku Github deployment",
    "description": "Heroku flask deployment",
    "repository": "https://github.com/OttawaSTEM/Heroku",
    "logo": "https://ottawastem.com/static/site/img/logo-big.png",
    "keywords": ["heroku", "flask", "github"]
}
```
Test the ```app.json``` file use your web browser to deploy from Heroku’s new Dashboard:
[https://heroku.com/deploy?template=https://github.com/OttawaSTEM/Heroku/tree/master](https://heroku.com/deploy?template=https://github.com/OttawaSTEM/Heroku/tree/master)


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