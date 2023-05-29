const db = require("../db/models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { Transaction, Category } = db;

async function getYearlyTransactions(req, res) {
  const { userId, year } = req.params;
  try {
    const transactions = await Transaction.findAll({
      where: {
        userId: userId,
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("EXTRACT", Sequelize.literal('YEAR FROM "date"')),
            year
          ),
        ],
      },
      include: Category,
      order: [
        ["date", "DESC"],
        ["id", "DESC"],
      ],
    });
    return res.json(transactions);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function getTransactionForMonth(req, res) {
  const { userId, month, year } = req.params;
  try {
    const transactions = await Transaction.findAll({
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
      order: [
        ["date", "DESC"],
        ["id", "DESC"],
      ],
    });
    return res.json(transactions);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function addTransaction(req, res) {
  const { userId, categoryId, name, amount, date } = req.body;
  try {
    const newTransaction = await Transaction.create({
      userId: userId,
      categoryId: categoryId,
      name: name,
      amount: amount,
      date: date,
    });
    const returnedData = await Transaction.findByPk(newTransaction.id, {
      include: Category,
    });
    return res.json(returnedData);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function editTransaction(req, res) {
  const { userId, month, year } = req.params;
  try {
    let transactionToAdd = req.body;
    let transactionToReplace = req.params.transactionId;
    let transactionToEdit = await Transaction.findByPk(transactionToReplace);
    await transactionToEdit.update(transactionToAdd);
    console.log("here");
    let allTransaction = await Transaction.findAll({
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
    return res.json(allTransaction);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function deleteTransaction(req, res) {
  const { userId, month, year } = req.params;
  try {
    const { transactionId } = req.params;
    await Transaction.destroy({ where: { id: transactionId } });
    let allTransaction = await Transaction.findAll({
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
    return res.json(allTransaction);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  addTransaction,
  editTransaction,
  deleteTransaction,
  getTransactionForMonth,
  getYearlyTransactions,
};
