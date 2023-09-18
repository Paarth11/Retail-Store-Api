const data = require('../db/model/costModel')

const del = async (req,res)=>{
const cost = req.params.cost
    try{
        await data.deleteOne({cost:cost})
        res.json('done')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = del 