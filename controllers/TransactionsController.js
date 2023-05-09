const db = require("../db/models/index");

const { User, Transaction, IncomeExpense, Budget, Category } = db;

async function getTransaction(req, res) {
  const { userId } = req.params;
  try {
    const transactions = await Transaction.findAll({
      where: { userId: userId },
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
  try {
    let transactionToAdd = req.body;
    let transactionToReplace = req.params.transactionId;
    let transactionToEdit = await Transaction.findByPk(transactionToReplace);
    await transactionToEdit.update(transactionToAdd);
    console.log("here");
    let allTransaction = await Transaction.findAll();
    return res.json(allTransaction);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function deleteTransaction(req, res) {
  try {
    const { transactionId } = req.params;
    await Transaction.destroy({ where: { id: transactionId } });
    let allTransaction = await Transaction.findAll();
    return res.json(allTransaction);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  addTransaction,
  editTransaction,
  deleteTransaction,
  getTransaction,
};
