var express = require('express'),
	app = express(),
	path = require('path'),
	port = process.env.PORT || 3000;

//Prerender
app.use(require('prerender-node').set('prerenderToken', '3s8hHePexp8JPJYoTRr3'));

// Serve any static files
app.use(express.static(path.join(__dirname, 'app/build')));

// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
	res.sendFile(path.join(__dirname, 'app/build', 'index.html'));
});

app.listen(port);