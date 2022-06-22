const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
text: {
    type: String,
    required: true,
},
id: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
}
}, { timestamps: true})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;