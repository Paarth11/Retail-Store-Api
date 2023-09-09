const costModel = require('../db/model/costModel');

const inputCost = async (req, res, next) => {
  const input = new costModel({
    name: req.body.name,
    cost: req.body.cost,
    item: req.body.item,
    feedback: req.body.feedback
  });
  try {
    const newCost = await input.save();
    res.status(201).json(newCost);
  } catch (err) {
    console.log(err);
  }
};

module.exports = inputCost;
