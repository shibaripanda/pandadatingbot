const mongoose = require('mongoose')
const Schema = mongoose.Schema


const belSchema = new Schema({
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
}
}, { timestamps: true});

const Bel = mongoose.model('Bel', belSchema);


module.exports = Bel
