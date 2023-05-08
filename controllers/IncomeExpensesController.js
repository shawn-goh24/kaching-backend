const db = require("../db/models/index");

const { IncomeExpense } = db;

async function getAllIncomeExpense(req, res) {
  try {
    const data = await IncomeExpense.findAll({});
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getAllIncomeExpense,
};
