const keys = require('../../config/keys');
const axios = require('axios');
const nlp = require('../nlp/nlp_api');

module.exports = app => {
    app.get('/news/:keyword', async (req, res) => {
        const keyword = req.params.keyword;
        // search news based on keyword from NYT API
        const raw = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?`+
        `q=${keyword}&api-key=${keys['NEWS-KEY']}`);
        if (!raw || !raw.data || !raw.data.response || !raw.data.response.docs) {
            res.send("Error, result not found!", raw);
        }
        const docs = raw.data.response.docs;

        // integrate with nlp module
        docs.forEach(doc => {
            if (!doc.abstract) {
                console.log('error, no abstract');
            } else {
                nlp(doc.abstract);
            }
        })
        res.send(docs);
    });
}
// newsSources = []
// newsDatabase = []

// export const getStream = function() {
//     newsSources.forEach(source => {
//         UpdateDatabase(newsDatabase, getNews(source))
//     });
// }

// export const search = async function(KEYWORD) {
//     ret = []
//     for (let news_id=0; news_id < news_database_size; news_id++) {
//         news = getNews(news_id)
//         if (KEYWORD in news) {
//             ret.push(news_id)
//         }
//     }
//     if (ret.length == 0) {
//         console.log('nothing found')
//     } else {
//         console.log('got results!');
//     }
//     return ret;
// };
