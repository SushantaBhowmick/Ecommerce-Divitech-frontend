const mongoose = require("mongoose");

const bCategorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
},
{
    timestamps:true,
})

module.exports = mongoose.model("bCategory",bCategorySchema);