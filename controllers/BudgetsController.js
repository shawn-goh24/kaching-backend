const db = require("../db/models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Budget, Category } = db;

async function getAllBudget(req, res) {
  const { userId, month, year } = req.params;
  try {
    const data = await Budget.findAll({
      where: {
        userId: userId,
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("EXTRACT", Sequelize.literal('MONTH FROM "date"')),
            month
          ),
          Sequelize.where(
            Sequelize.fn("EXTRACT", Sequelize.literal('YEAR FROM "date"')),
            year
          ),
        ],
      },
      include: Category,
    });
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function addBudget(req, res) {
  const { userId, categoryId, amount, date } = req.body;
  try {
    const data = await Budget.create({
      userId: userId,
      categoryId: categoryId,
      amount: amount,
      date: date,
    });
    const returnedData = await Budget.findByPk(data.id, {
      include: Category,
    });
    return res.json(returnedData);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function editBudget(req, res) {
  try {
    let budgetToAdd = req.body;
    let budgetToReplace = req.params.budgetId;
    let budgetToEdit = await Budget.findByPk(budgetToReplace);
    await budgetToEdit.update(budgetToAdd);
    let allBudgets = await Budget.findAll({
      include: Category,
    });
    return res.json(allBudgets);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function deleteBudget(req, res) {
  try {
    const { budgetId } = req.params;
    await Budget.destroy({ where: { id: budgetId } });
    let allBudgets = await Budget.findAll({
      include: Category,
    });
    return res.json(allBudgets);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getAllBudget,
  addBudget,
  editBudget,
  deleteBudget,
};
