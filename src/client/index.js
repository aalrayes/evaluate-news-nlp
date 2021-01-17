import { inputValidate } from './js/inputCheck';
import { handleSubmit } from './js/formHandler'
import {generateResult} from './js/contentGenerator';
import {convertScoreToSentiment} from './js/sentimentConverter';
import {postData} from "./js/postdata"
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

const submit =  document.getElementById('submit');
submit.addEventListener('click',e=>{
handleSubmit(e);
})


export {
    inputValidate,
    handleSubmit,
    postData,
    generateResult,
    convertScoreToSentiment
}

