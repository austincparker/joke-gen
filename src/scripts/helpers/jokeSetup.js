import { jokePunchlineBtn } from './buttons';

const jokeSetup = (jokeObj) => {
  document.querySelector('#app').innerHTML = '';
  console.warn(jokeObj);
  document.querySelector('#app').innerHTML = `${jokeObj.setup}`;
  // console.warn(jokeObj.id);
  jokePunchlineBtn(jokeObj);
};

export default jokeSetup;
