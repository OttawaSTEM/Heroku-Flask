# Heroku Flask with Github Deployment
## 1. Prepare Heroku application deploy configuration
### 1.1 Create ```Procfile``` for application configuration
web: gunicorn run:app

### 1.2 Create ```requirements.txt``` for application configuration

## 2. Connect Github to Heroku
### 2.1 Under Heroku application -> "Deploy" -> "Deployment method"
### 2.2 Choose "Github Connect to Github"
### 2.3 Authenticate Github to Heroku
### 2.4 Click "Search" and choose repository from Github -> "Connect"
### 2.5 Click "Enable Automatic Deploys"