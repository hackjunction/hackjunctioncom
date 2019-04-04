var express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 3000;

// if (process.env.NODE_ENV === 'production') {
// 	var enforce = require('express-sslify');
// 	app.use(enforce.HTTPS({ trustProtoHeader: true }));
// }

// Serve any static files
app.use(express.static(path.join(__dirname, 'frontend/build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port);
console.log('Listening on port', port);