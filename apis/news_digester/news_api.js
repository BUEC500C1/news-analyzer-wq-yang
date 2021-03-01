// import axios from 'axios';
newsSources = []
newsDatabase = []

export const getStream = function() {
    newsSources.forEach(source => {
        UpdateDatabase(newsDatabase, getNews(source))
    });
}

export const search = async function(KEYWORD) {
    ret = []
    for (let news_id=0; news_id < news_database_size; news_id++) {
        news = getNews(news_id)
        if (KEYWORD in news) {
            ret.push(news_id)
        }
    }
    if (ret.length == 0) {
        console.log('nothing found')
    } else {
        console.log('got results!');
    }
    return ret;
};
