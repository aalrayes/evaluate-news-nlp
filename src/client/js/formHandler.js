import {inputValidate} from "./inputCheck"
import {postData} from "./postdata"
import {generateResult} from './contentGenerator';
import {convertScoreToSentiment} from './sentimentConverter';

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('text').value;
    if(!inputValidate(formText)){
        document.getElementById('results').innerHTML ="";
        return false;
    }
    console.log("::: Form Submitted :::")
    postData({text:formText})
    .then(function(res){
      let output = document.getElementById('results');
      output.innerHTML = '';
      output.innerHTML = generateResult(res);
    })
}



export { handleSubmit }
