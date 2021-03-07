const aws = require('aws-sdk');
const fs = require('fs');
const keys = require('../../config/keys');
const multer = require('multer');

const s3 = new aws.S3({
    accessKeyId: keys['AWS-ID'],
    secretAccessKey: keys['AWS-KEY'],
    region: 'us-east-1'
});

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, `storage/${req.params.username}`);
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
// const upload = multer({storage: storage});

module.exports = app => { // add file-upload-related apis to our app
    /** upload a file: POST /file/$username
     * use multer to upload, store file to aws s3
     * */ 
    app.post('/file/:username', multer({dest: 'temp/'}).single('upload'), (req, res) => {
        const uploadParams = {
            Bucket: keys['BUCKET-NAME'],
            Key: `storage/${req.params.username}/${req.file.originalname}`,
            Body: fs.createReadStream(req.file.path)
        };
        s3.upload(uploadParams, (err, data) => {
            console.log(err, data);
            // TODO: Store data info to database
        });
    });

    // get info of an uploaded file: GET /file/$TOKEN
    app.get('/file/:token', (req, res) => {
        // TODO: get data from database
        info = {
            token: req.params.token,
            'user_id': 3223, // who owns this file
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