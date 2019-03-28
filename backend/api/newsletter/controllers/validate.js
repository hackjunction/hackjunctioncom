const countries = require('./countries.json')

const validate = (country, email) => {

	if (countries.indexOf(country) === -1) {
		return false;
	}

	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(String(email).toLowerCase())) {
		return false;
	}

	return true;
}

module.exports = validate;