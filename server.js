// Core dependencies
const path = require('path');

// NPM dependencies
const express = require('express');
const nunjucks = require('nunjucks');

// Local dependencies
const routes = require('./app/routes');
const autoRoutes = require('./app/routes/auto');
const app = express();


// Set up application
var appViews = [
  path.join(__dirname, '/node_modules/govuk-frontend/components'),
  path.join(__dirname, '/app/views'),
  path.join(__dirname, '/app/views/layouts'),
  path.join(__dirname, '/app/views/partials'),
  path.join(__dirname, '/src/components')
];


// Nunjucks configurations
var nunjucksApp = nunjucks.configure(appViews, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
});

// Set view engine
app.set('view engine', 'html');


// Middleware to serve static assets
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/assets', express.static(path.join(__dirname, 'node_modules', 'govuk-frontend', 'assets')));

app.use(routes);
app.use(autoRoutes); // must be the last one

// Start app
app.listen('3000', function(err) {
	if (err) {
		throw err;
	} else {
    console.log('Listening on port 3000 url: http://localhost:3000');
  }
});


module.exports = app;