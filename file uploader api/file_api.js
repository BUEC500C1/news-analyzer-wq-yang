import axios from 'axios';

export const upload = async function(USER_ID, DATA) {
    await axios.post(`/file?uid=USER${USER_ID}`,DATA)
        .catch(err => {
            console.log('fail to upload', err)
            return FAIL;
        });
    console.log('upload successfully!');
    return TOKEN;
};
export const getInfo = async function(TOKEN) {
    const res = await axios.get(`/file/${TOKEN}`)
        .catch( err => {
            console.log('fail to get file info.', err)
            return FAIL;
        })
    console.log('got file info ')
    return res;
}

export const getContent = async function(TOKEN) {
    const res = await axios.get(`/file/${TOKEN}/content`)
        .catch( err => {
            console.log('fail to get file content', err)
            return FAIL;
        })
    return res;
}

export const updateContent = async function(TOKEN, DATA) {
    await axios.post(`/file/${TOKEN}/content`, DATA)
    .catch(err => {
        console.log('fail to updata file', err);
        return FAIL;
    })
    return SUCCESS;
}

export const deleteFile = async function(TOKEN) {
    await axios.delete(`/file/${TOKEN}`)
    .catch(err => {
        console.log('fail to delete', err);
        return FAIL
    })
    return SUCESS
}