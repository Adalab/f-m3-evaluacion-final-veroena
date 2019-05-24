const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';

const fetchCharacters = () => {
  return fetch(ENDPOINT).then(response => response.json());
}

export {fetchCharacters};