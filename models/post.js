const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
profiledating: {
    type: String,
    required: true,
},
id: {
    type: String,
    required: true,
},
username: {
    type: String,
    required: true,
},
 profile: {
    type: String,
    required: true,
},
idmes: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
},
profiledata: {
    type: String,
    required: true,
},
mesfyou: {
    type: String,
    required: true,
},
chatstatus: {
    type: String,
    required: true,
},
chat: {
    type: String,
    required: true,
},
chatclient: {
    type: String,
    required: true,
}
}, { timestamps: true});

const Post = mongoose.model('Post', postSchema);


module.exports = Post
