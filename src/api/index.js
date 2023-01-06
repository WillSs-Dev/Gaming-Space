const options = {
  method: 'GET',
};

const baseUrl = 'https://api.rawg.io/api';

const apiKey = process.env.REACT_APP_GAMES_API_PERSONAL_KEY;

const getNewPage = (navNumber) =>
  fetch(
    `${baseUrl}/games?key=${apiKey}&page=${navNumber}&page_size=15`,
    options
  )
    .then((response) => response.json())
    .catch((err) => err);

const getGameById = (id) =>
  fetch(`${baseUrl}/games/${id}?key=${apiKey}`, options)
    .then((response) => response.json())
    .catch((err) => err);

const getGameScreenshots = (id) =>
  fetch(`${baseUrl}/games/${id}/screenshots?key=${apiKey}`, options)
    .then((response) => response.json())
    .catch((err) => err);

export { getNewPage, getGameById, getGameScreenshots };
