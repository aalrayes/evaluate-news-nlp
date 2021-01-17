function inputValidate(inputText) {
    console.log("::: Running inputValidate :::", inputText);
    if(inputText =="" || inputText == undefined || inputText.indexOf('#') !== -1) {
        alert('dude, come on. the text should not be empty or contain #');
        return false;
    }
    return true;
}

export { inputValidate }
