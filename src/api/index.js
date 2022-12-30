const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
  },
};

const baseUrl = 'https://rawg-video-games-database.p.rapidapi.com';

const apiKey = process.env.REACT_APP_GAMES_API_PERSONAL_KEY;

const getNewPage = (navNumber) =>
  fetch(
    `${baseUrl}/games?key=${apiKey}&page=${navNumber}&page_size=39`,
    options
  )
    .then((response) => response.json())
    .catch((err) => err);

export { getNewPage };
