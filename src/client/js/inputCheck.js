function checkEmpty(inputText) {
    console.log("::: Running checkEmpty :::", inputText);

    if(inputText =="" || inputText == undefined ) {
        alert('dude, come on. you got to type something for me to do stuff')
        return false;
    }
    return true;
}

export { checkEmpty }
