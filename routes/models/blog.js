const mongoose = require ('mongoose')

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "Please enter Blog title"],
        trim: true,
        maxlength: [100, "Blog title can't exceed 100 characters"]
    },
    content:{
        type: String,
        required: [true, "Please enter Blog Content"]
    },
    time: {
        type: String,
        required: [true,"Please enter time"]
    }
})

module.exports = mongoose.model("Blog",blogSchema);