import countries from '../data/countries';

export const toRomanNumeral = (num) => {
	if (isNaN(num))
		return NaN;
	var digits = String(+num).split(""),
		key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
			"", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
			"", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
		roman = "",
		i = 3;
	while (i--)
		roman = (key[+digits.pop() + (i * 10)] || "") + roman;
	return Array(+digits.join("") + 1).join("M") + roman;
}

export const isCloudinaryUrl = (url) => {
	return url.indexOf('cloudinary') !== -1
}

export const isCountry = (country) => {
	return countries.indexOf(country) !== -1
}

export const delay = (ms) => {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve()
		}, ms)
	})
}

export const minDelay = (promise, ms) => {
	return Promise.all([
		promise,
		delay(ms)
	]).then(([result]) => {
		return result
	})
}