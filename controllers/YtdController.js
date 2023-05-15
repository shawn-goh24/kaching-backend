const db = require("../db/models/index");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const { User, Transaction, IncomeExpense, Budget, Category } = db;

async function getYtdTransactions(req, res) {
  const { userId, year, incomeExpenseId } = req.params;
  try {
    const transactions = await Transaction.sum("amount", {
      where: {
        userId: userId,
        [Op.and]: [
          Sequelize.where(
            Sequelize.fn("EXTRACT", Sequelize.literal('YEAR FROM "date"')),
            year
          ),
        ],
      },
      include: {
        model: Category,
        where: { incomeExpenseId: incomeExpenseId },
      },
    });
    console.log(transactions);
    // return res.json(transactions);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getYtdTransactions,
};
