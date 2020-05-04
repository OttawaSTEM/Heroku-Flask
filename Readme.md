# Heroku Flask with Github Deployment
## 1. Prepare Heroku application deploy configuration
### 1.1 Create ```runtime.txt``` for Python version 
```
python-3.7.6
```

### 1.2 Create ```Procfile``` for application configuration
```
web: gunicorn run:app
```

## 2. Create a 'Deploy to Heroku' Button
### 2.1 Create ```app.json``` file
```
{
    "name": "Heroku Github deployment",
    "description": "Heroku flask deployment",
    "repository": "https://github.com/OttawaSTEM/Heroku/",
    "logo": "https://ottawastem.com/static/site/img/logo-big.png",
    "keywords": ["heroku", "flask", "github"]
}
```
### 2.2 Test the ```app.json``` file use your web browser to deploy from Heroku’s new Dashboard:  
[https://heroku.com/deploy?template=https://github.com/OttawaSTEM/Heroku/](https://heroku.com/deploy?template=https://github.com/OttawaSTEM/Heroku/)

### 2.3 Add the Heroku button in ```Readme.md```
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/OttawaSTEM/Heroku/)

## 3. Connect Github to Heroku
### 3.1 Under Heroku application -> "Deploy" -> "Deployment method"
### 3.2 Choose "Github Connect to Github"
### 3.3 Authenticate Github to Heroku
### 3.4 Click "Search" and choose repository from Github -> "Connect"
### 3.5 Click "Enable Automatic Deploys"