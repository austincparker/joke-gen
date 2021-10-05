// Setup Button
const jokeSetupBtn = () => {
  document.querySelector('#btnContainer').innerHTML = '<button type="button" id="setupBtn" class="btn btn-primary">Get a Joke</button>';
};

// Punchline Button

const jokePunchlineBtn = (jokeObj) => {
  document.querySelector('#btnContainer').innerHTML = `<button type="button" id="punchlineBtn--${jokeObj.id}" class="btn btn-secondary">Get Punchline</button>`;
//   console.warn(jokeObj.id);
};

// Another Joke

const jokeAnotherBtn = () => {
  document.querySelector('#btnContainer').innerHTML = '<button type="button" id="anotherBtn" class="btn btn-success">ANOTHER!!</button>';
};

export { jokeSetupBtn, jokePunchlineBtn, jokeAnotherBtn };
