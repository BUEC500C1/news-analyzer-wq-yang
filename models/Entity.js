const mongoose = require('mongoose');
const { Schema } = mongoose;
const fileSchema = require('./File')

const entitySchema = new Schema({
    // _id: use default primary key _id
    entity: String,
    files: [fileSchema]
});
mongoose.model('Entity', entitySchema);
module.exports = entitySchema;