const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let postModel = {

    photo: {
        type: String,
        required: [true, "photo url wrong !!!"],
    },
    name: {
        type: String,
        required: [true, "wrong name or missing"],
        unique: true,
    },
    email: {
        type: String,
    },
    post: {
        type: String,
        required: [true, "Please add your endorsement"],
        minlength: [4 , "Min post or endorsement length should be 4 char/digits"],
    },

};

const postSchema = new Schema(postModel);

const thePostSchema =  mongoose.model (
    "postSchema",
    postSchema
);


module.exports = thePostSchema;