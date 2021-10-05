import { getJoke } from './jokeData';
import jokePunchline from './jokePunchline';
import jokeSetup from './jokeSetup';

const domEvents = () => {
  document.querySelector('#btnContainer').addEventListener('click', (e) => {
    if (e.target.id.includes('setupBtn')) {
      getJoke().then((jokeObj) => jokeSetup(jokeObj));
    }
    if (e.target.id.includes('punchlineBtn')) {
      const [, jokeId] = e.target.id.split('--');
      jokePunchline(jokeId);
    }
    if (e.target.id.includes('anotherBtn')) {
      getJoke().then((jokeObj) => jokeSetup(jokeObj));
    }
  });
};

export default domEvents;
