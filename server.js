var express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 3000;

var enforce = require('express-sslify');


// Serve any static files
app.use(express.static(path.join(__dirname, 'frontend/build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.listen(port);