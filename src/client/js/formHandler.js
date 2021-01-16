import {checkEmpty} from "./inputCheck"
import {postData} from "./postdata"
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let output = document.getElementById('results');
    if(!checkEmpty(formText)){
        output.innerHTML ="";
        return false;
    }

    console.log("::: Form Submitted :::")
    postData({text:formText})
    .then(function(res){
        output.innerHTML = "";
        output.innerHTML = res.result;
    })
}




export { handleSubmit }
