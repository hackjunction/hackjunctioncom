var express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 3000;

// Make sure crawlers understand the site
const prerendercloud = require('prerendercloud');
app.use(prerendercloud);

// Serve any static files
app.use(express.static(path.join(__dirname, 'app/build')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
});

app.listen(port);