import { jokeAnotherBtn } from './buttons';
import { getJokeById } from './jokeData';
import jokeView from './jokeView';

const jokePunchline = (jokeId) => {
  document.querySelector('#app').innerHTML = '';
  getJokeById(jokeId).then((jokeObj) => jokeView(jokeObj));
  jokeAnotherBtn();
};

export default jokePunchline;
