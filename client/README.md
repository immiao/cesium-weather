### Installation

```
npm install
```

To build the project (hot build):

```
npm run build
```

To start a local server at `http://localhost:8080` :

```
npm run start
```

The weather data comes from [https://openweathermap.org/](https://openweathermap.org/).

To build up your own application, please apply a new API key and replace the `process.env.API_KEY ` in `webpack.config.js`.

Since we're fetching the weather data directly in the front end, you need to disable CORS for your browser to run this application.
