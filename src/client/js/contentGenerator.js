import {convertScoreToSentiment} from './sentimentConverter'
function generateResult(data){
  let output ="";
  for (const result in data) {
  if(result == 'score_tag'){data[result]= convertScoreToSentiment(data[result]);}
  output+=`<li> ${result}: ${data[result].toLowerCase()}</li> \n`;
}
 if (output == ""){return false}
 return output;
}

export { generateResult }