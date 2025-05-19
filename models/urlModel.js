import mongoose from "mongoose";
const urlSchema = mongoose.Schema({
    url : {
        type : String,
        required : true
    },
    shortUrl : {
        type : String,
        required : true,
    },
    visited : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})
const urlModel = mongoose.model("Url", urlSchema);
export default urlModel;