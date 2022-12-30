const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
  },
};

const baseUrl = 'https://rawg-video-games-database.p.rapidapi.com';

const apiKey = process.env.REACT_APP_GAMES_API_PERSONAL_KEY;

const getFivePagesOfGames = (navNumber) => {
  fetch(`${baseUrl}/games?key=${apiKey}&page=${navNumber}&page_size=150`, options)
    .then((response) => response.json())
    .catch((err) => err);
};

export { getFivePagesOfGames };
