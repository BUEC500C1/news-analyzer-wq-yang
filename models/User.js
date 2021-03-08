const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    // _id: use default primary key _id
    username: { type: String, unique: true },
    files: [{ type: Schema.Types.ObjectId, ref:'File' }]
});
mongoose.model('User', userSchema);