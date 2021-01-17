import {checkEmpty} from "./inputCheck"
import {postData} from "./postdata"
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('text').value;

    if(!checkEmpty(formText)){
        document.getElementById('results').innerHTML ="";
        return false;
    }

    console.log("::: Form Submitted :::")
    postData({text:formText})
    .then(function(res){
      generateResult(res);
    })
}

function generateResult(data){
  let output = document.getElementById('results');
  output.innerHTML = "";
  
  for (const result in data) {
  
  if(result == 'score_tag'){data[result]= convertScoreToSentiment(data[result]);}

  output.innerHTML+=`<li> ${result}: ${data[result].toLowerCase()}</li> \n`;
}

}
function convertScoreToSentiment(text){

    const data = text.toUpperCase();
    if(data == 'P+'){return 'strong positive'}
    if(data == 'P'){return 'positive'}
    if(data == 'NEU'){return 'neutral'}
    if(data == 'N'){return 'negative'}
    if(data == 'N+'){return 'strong negative'}
    if(data == 'NONE'){return 'without sentiment'}
}




export { handleSubmit }
