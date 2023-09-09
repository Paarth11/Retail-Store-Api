const data = require('../db/model/costModel')

const total = async (req,res)=>{
    const fullInfo = await data.find({},{cost:1,_id:0})
    let cost = 0
    for(const item of fullInfo){
        cost+=item.cost
    }
    res.json(cost)
}
module.exports = total  