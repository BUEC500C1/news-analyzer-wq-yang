const assert = require('assert');

const { upload } = require('./test_file_uploader');


describe('Upload', function() {
    describe('#upload file', function() {
        it('some file', function() {
            let USER_ID = 343242;
            let DATA = 'fdfdf';
            upload(USER_ID, DATA)
        });
    });
});