const mongoose = require('mongoose')
const Schema = mongoose.Schema

const costSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    item:{
        type: String,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    contactInfo:{
        type:String,
        required: false
    },
    feedback:{
        type:String,
        required:false
    },
},{
    timestamps:true
})

module.exports = mongoose.model('Cost',costSchema)