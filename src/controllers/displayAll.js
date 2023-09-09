const data = require('../db/model/costModel');

const displayAll = async (req,res)=>{
    const fullInfo = await data.find({},{name:1,item:1,cost:1})
    res.json(fullInfo)
}

module.exports = displayAll;
