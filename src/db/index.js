const mongoose = require('mongoose')

const dbConnect = ()=>{
    try{
        mongoose.connect('mongodb://127.0.0.1/db').then(
            console.log('connected to db')
        )
    }
    catch(err){
        console.log(err)
    }
    }
module.exports = dbConnect; 