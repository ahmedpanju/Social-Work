var express = require('express');

var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

var path = require('path');
// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', routes.home);

app.get('/research', routes.research);

app.get('/contact', routes.contact);

app.get('*', routes.notFound);


// Listen on port 3000
app.listen(process.env.PORT || 3000);