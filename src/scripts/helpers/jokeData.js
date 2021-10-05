import axios from 'axios';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const jokeCall = await axios.get(endpoint);

  return jokeCall.data;
};

const getJokeById = async (id) => {
  const oneJoke = await axios.get(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);

  return oneJoke.data;
};

export { getJoke, getJokeById };
