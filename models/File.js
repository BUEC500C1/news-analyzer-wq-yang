const mongoose = require('mongoose');
const { Schema } = mongoose;
const entitySchema = require('./Entity');

const fileSchema = new Schema({
    // _id: use default primary key _id
    _user: { type: Schema.Types.ObjectId, ref:'User' },
    filename: String,
    type: String,
    location: String,
    content: String,
    uploadTime: Date,
    entities: [entitySchema],
    sentiment: [Number]
});
mongoose.model('File', fileSchema);
module.exports = fileSchema