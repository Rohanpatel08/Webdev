const url = 'https://weather338.p.rapidapi.com/locations/search?query=Ahmedabad&language=en-US';
const options = {
	method: 'GET',
    async: true,
	headers: {
		'X-RapidAPI-Key': '51868ed371msha2b088847f4d500p14d7b7jsn2189c751c601',
		'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
	}
};

fetch(url,options)
.then(response => response.json())
.then(response => console.log(response))
.then(err => console.log(err))