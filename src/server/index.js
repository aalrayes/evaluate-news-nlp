var path = require('path')
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { default: axios } = require('axios');
const application_key = process.env.API_KEY;
const app = express();

const projectData = {};
app.use(express.static('dist'));

//middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})

app.post('/analyze',function (req, res) {
   let fromText = req.body.text;
   let api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${application_key}&of=json&txt=${fromText}&model=general&lang=en`;
   axios.get(api_url).then(response =>{
    projectData.score_tag = response.data.score_tag;
    projectData.agreement = response.data.agreement;
    projectData.irony = response.data.irony;
    projectData.confidence = response.data.confidence;
    console.log(projectData) 
    res.send(projectData);
   });
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})


