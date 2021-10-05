import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { jokeSetupBtn } from './helpers/buttons';
import domEvents from './helpers/domEvents';
import { getJoke } from './helpers/jokeData';

const init = () => {
  document.querySelector('#app').innerHTML = `
  `;
  jokeSetupBtn();
  domEvents();
  getJoke().then(console.warn);
};

init();
