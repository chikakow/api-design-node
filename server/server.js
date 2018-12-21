var express = require('express');
var app = express();
var err = require('./err');
// below is router...
var api = require('./api/api');

// setup the app middlware
require('./middleware/appMiddlware')(app);

// setup the api
app.use('/api/', api);
// set up global error handling
app.use(err());

// export the app for testing
module.exports = app;
