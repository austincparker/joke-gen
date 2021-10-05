const jokeView = (jokeObj) => {
  document.querySelector('#app').innerHTML = `${jokeObj.delivery}`;
};

export default jokeView;
