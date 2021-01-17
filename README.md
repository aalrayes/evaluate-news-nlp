# Evaluate News Natural Language Processing - Misk project 4

Evaluate News NLP is a website used to evaluate the sentiment of text, using meaningCloud 's Sentiment api.

the point of this project was to:

-  Be set up with Webpack, Express, Node, and Sass, and Service Workers

- Have separate dev and prod configurations for Webpack

-  Have the developer environment set up with the Webpack dev server

- Make one request to the meaningCloud API

- Use Sass for styling

- Minify js and styles in the production environment

- Be able to show content offline

## Installation

Clone the project :

```bash
git clone https://github.com/aalrayes/evaluate-news-nlp.git 
```
- install dependencies the project folder:
```bash
npm install 
```
## Usage

Before you start the app, create a `.env` file at the app's root. This file must have at least one env variable called `API_KEY` containing your key to the meaningCloud API


- Start the webpack development server. `Port: 8080`
```bash
npm run build-dev
```
- Build the `dist` folder for express to use.
```bash
npm run build-prod
```
- Start the express server. `Port: 3000`
```bash
npm run start
```
- After that you will be greeted with the front page, and should be able to enter the text you want to evaluate.

![Landing sceensshot](https://i.ibb.co/GRpyY90/sentiment-val.png)


## Test
```bash
npm run test
```
