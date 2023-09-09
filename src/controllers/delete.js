const data = require('../db/model/costModel')

const del = async (req,res)=>{
    try{
        await res.data.deleteOne()
        res.json('done')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = del 