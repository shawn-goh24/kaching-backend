const db = require("../db/models/index");

const { Budget } = db;

async function getAllBudget(req, res) {
  try {
    const data = await Budget.findAll({});
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

// async function editBudget(req, res) {
//   try {
//     let budgetToAdd = req.body;
//     let budgetToReplace = req.params.budgetId;
//     let budgetToEdit = await Budget.findByPk(budgetToReplace);
//     await budgetToEdit.update(budgetToAdd);
//     let allBudgets = await Budget.findAll();
//     return res.json(allBudgets);
//   } catch (err) {
//     return res.status(400).json({ error: true, msg: err });
//   }
// }

// async function deleteBudget(req, res) {
//   try {
//     const { budgetId } = req.params;
//     await Budget.destroy({ where: { id: budgetId } });
//     let allBudgets = await Budget.findAll();
//     return res.json(allBudgets);
//   } catch (err) {
//     return res.status(400).json({ error: true, msg: err });
//   }
// }

module.exports = {
  getAllBudget,
  // editBudget,
  // deleteBudget,
};
