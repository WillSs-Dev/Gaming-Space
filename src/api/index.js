const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

const baseUrl = 'https://rawg-video-games-database.p.rapidapi.com';

const apiKey = process.env.REACT_APP_GAMES_API_PERSONAL_KEY;

fetch(`${baseUrl}/games?key=${apiKey}`, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
