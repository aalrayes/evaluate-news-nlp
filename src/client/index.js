import { checkEmpty } from './js/inputCheck'
import { handleSubmit } from './js/formHandler'
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
    checkEmpty,
    handleSubmit,
    postData
}

