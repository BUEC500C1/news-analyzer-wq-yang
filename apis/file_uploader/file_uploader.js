const aws = require('aws-sdk');
const fs = require('fs');
const ingest = require('./ingest');
const keys = require('../../config/keys');
const mongoose = require('mongoose');
const multer = require('multer');

const File = mongoose.model('File');
const User = mongoose.model('User');

const s3 = new aws.S3({
    accessKeyId: keys['AWS-ID'],
    secretAccessKey: keys['AWS-KEY'],
    region: 'us-east-1'
});

// add file-upload-related apis to our app
module.exports = app => {
    /** upload a file: POST /file/$username
     * use multer to upload, store file to aws s3
     * */
    app.post('/file/:username', multer({dest: 'temp/'}).single('upload'), (req, res) => {
        const username = req.params.username;
        const {originalname, mimetype} = req.file;

        const uploadParams = {
            Bucket: keys['BUCKET-NAME'],
            Key: `storage/${username}/${originalname}`,
            Body: fs.createReadStream(req.file.path)
        };
        s3.upload(uploadParams, async (err, data) => {
            if (err) {
                console.log('Error', err);
                return;
            }
            if (data) {
                const user = await User.findOne({ username });
                const file = new File({
                    _user: user._id,
                    filename: originalname,
                    type: mimetype,
                    location: data.Location,
                    uploadTime: Date.now()
                });
                await file.save();
                user.files.push(file._id);
                await user.save();
                res.send('upload seccessfully');
                ingest(data.Location);
            }
        });
    });

    // get info of an uploaded file: GET /file/$TOKEN
    app.get('/file/:token', (req, res) => {
        // TODO: get data from database
        info = {
            token: req.params.token,
            'username': 3223, // who owns this file
            'privilege_users':{
                'read': [3333, 4324],
                'full': [3223],  // complete permission
            },
            'filename': 'example.pdf',
            'filetype': 'PDF',
            'language': 'EN',
            'uploadTime': new Date(),
            'createTime': new Date(),
            'entities': ['teacher', 'school'],
            'sentiment': [0.99, 0.98]
        }
        res.send(200, info);
        console.log('get info successfully!');
    });

    app.get('/file/:token/content', (req, res) => {
        
        console.log('get content successfully!');
    })
}





// client side

// export const upload = async function(USER_ID, DATA) {
//     await axios.post(`/file?uid=USER${USER_ID}`,DATA)
//         .catch(err => {
//             console.log('fail to upload', err)
//             return FAIL;
//         });
//     console.log('upload successfully!');
//     return TOKEN;
// };
// export const getInfo = async function(TOKEN) {
//     const res = await axios.get(`/file/${TOKEN}`)
//         .catch( err => {
//             console.log('fail to get file info.', err)
//             return FAIL;
//         })
//     console.log('got file info ')
//     return res;
// }

// export const getContent = async function(TOKEN) {
//     const res = await axios.get(`/file/${TOKEN}/content`)
//         .catch( err => {
//             console.log('fail to get file content', err)
//             return FAIL;
//         })
//     return res;
// }

// export const updateContent = async function(TOKEN, DATA) {
//     await axios.post(`/file/${TOKEN}/content`, DATA)
//     .catch(err => {
//         console.log('fail to updata file', err);
//         return FAIL;
//     })
//     return SUCCESS;
// }

// export const deleteFile = async function(TOKEN) {
//     await axios.delete(`/file/${TOKEN}`)
//     .catch(err => {
//         console.log('fail to delete', err);
//         return FAIL
//     })
//     return SUCESS
// }