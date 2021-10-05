# Joke Generator

[![Netlify Status](https://api.netlify.com/api/v1/badges/a45290c9-9615-44f1-8401-06d9fb7f6920/deploy-status)](https://app.netlify.com/sites/acp-joke-gen/deploys)

#### App Link: https://acp-joke-gen.netlify.app/

## Breakdown

Here is a breakdown of the problems we had to solve during this refresher exercise using vanilla JS:

- When a user first loads the app, a button appears on the DOM that reads "Get a Joke."
	- Load a button to the DOM when app loads. jokeBtn().
	- Add event listener to that button.
- When the user presses the "Get a Joke" button, an API call is made to the joke API and the joke setup appears on the DOM.
	- Make an API call promise to GET any two-part joke. getJoke().
	- Call getJoke() in event listener for button and .then render it to DOM.
- When a user presses the "Get a Joke" button, the button text changes to "Get Punchline."
	- Write function that renders a new button to the DOM. puchlineBtn().
- When a user presses the "Get Punchline" button, both the joke setup and delivery are on the DOM along with a button that reads "Get Another Joke."
	- Preserve the joke ID by adding it to the id tag of the punchlineBtn.
	- Write new Promise that gets only the joke with the corresponding ID. getSingleJoke().
	- Call getSingleJoke() in the punchlineBtn event listener and .then render it to DOM.
	- Write function that renders new button to the DOM. anotherBtn().
- When the user presses the "Get Another Joke" button, the app starts over from step 2.
	- Make an API call promise to GET any two-part joke. getJoke().
	- Call getJoke() in event listener for button and .then render it to DOM.
