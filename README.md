# Simple weather app using GeolocationPosition and OpenWeather's API

Just a simple app which uses the GeolocationPosition web API and OpenWeather's current weather API. React's Context API is used for some basic state management. 

I delibrately didn't add any styling as I wanted to use this more as a short exercise with interacting with OpenWeather's API and writing the Cypress tests during a free weekend.

ESlint is run on a git pre-commit hook - [Thanks to Husky](https://typicode.github.io/husky/).


## Install, Build then Serve

1) Install the package dependancies:

```
npm install
```

2) Add a .env file to the project root and add the following environment variable to the file:

```
REACT_APP_OPEN_WEATHER_KEY=<API_KEY>
```
Replace <API_KEY> with your own key which you can get from https://openweathermap.org/api. You'll need to subscribe to the "Current Weather Data" api on their site for the key to work with this app.

3) Build the app then serve it on http://localhost:5000

```
npm run build && npx serve -s build
```

Or start the app in development mode on http://localhost:3000

```
npm start
```

To run the cypress tests (don't forget to start the app in development mode before running Cypress):

```
npm run cypress
```
