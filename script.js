const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '892f026035mshf474bc12dcec64ep10587ejsn24bf4e55321c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}