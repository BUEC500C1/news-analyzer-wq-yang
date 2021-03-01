// import axios from 'axios';
let text = ''

const textInit = function(data, type='text', lang='en') {
    try {
        switch (type) {
            case 'text':
                text = data
                break;
            case 'raw data':
                text = process(data)
            default:
                break;
        }
    } catch (error) {
        console.log(error, 'fail to initiate the text');
    }
    
    console.log('successfully initiated the text');
}

const analyzeSentiment = function(text, lang='en') {
    sentiment = foo(text)
    return sentiment
}

const analyzeEntity = function(text, lang='en') {
    entity = foo(text)
    return entity
}