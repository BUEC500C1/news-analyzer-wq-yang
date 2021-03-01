const assert = require('assert');

const api = require('../nlp_api');

describe('Sentiment', function() {
    describe('#test sentiment', function() {
        it('sentiment of some files', function() {
            api.analyzeSentiment(file, 'en')
        });
    });
});