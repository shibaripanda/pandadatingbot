const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    id: {
        type: String,
        required: true,
    }
    }, { timestamps: true});

const Post = mongoose.model('Post', postSchema);

const patreonSchema = new Schema({
    id: {
        type: String,
        required: false,
    },
    ptreonclient: {
        type: String,
        required: true,
    },
    patron_full_name: {
        type: String,
        required: true,
    },
    patron_email: {
        type: String,
        required: true,
    },
    reward_title: {
        type: String,
        required: true,
    },
    declined_since: {
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
    idmeschanel: {
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
    profiledating: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    group1: {
        type: String,
        required: true,
    },
    group2: {
        type: String,
        required: true,
    },
    group3: {
        type: String,
        required: true,
    },
    group4: {
        type: String,
        required: true,
    },
    group5: {
        type: String,
        required: true,
    }
    }, { timestamps: true});


const Patreon = mongoose.model('Patreon', patreonSchema);


module.exports = Post
module.exports = Patreon
