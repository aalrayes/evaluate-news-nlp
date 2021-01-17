function convertScoreToSentiment(text){
    const data = text.toUpperCase();
    if(data == 'P+'){return 'strong positive'}
    if(data == 'P'){return 'positive'}
    if(data == 'NEU'){return 'neutral'}
    if(data == 'N'){return 'negative'}
    if(data == 'N+'){return 'strong negative'}
    if(data == 'NONE'){return 'without sentiment'}
    return false;
}

export {convertScoreToSentiment}