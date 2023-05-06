const db = require("../db/models/index");

const { User, Transaction, IncomeExpense, Budget, Category } = db;

// user ? continue : add
async function checkUser(req, res) {
  const currUser = req.body.user;
  try {
    const [user, created] = await User.findOrCreate({
      where: { email: currUser.email },
      defaults: {
        firstName: currUser.given_name,
        lastName: currUser.family_name,
      },
    });

    if (created) {
      console.log(user);
    }

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

// base function
// get all users in db
async function getAllUser(req, res) {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}
async function getAllTransaction(req, res) {
  try {
    const data = await Transaction.findAll();
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}
async function getAllCategory(req, res) {
  try {
    const data = await Category.findAll();
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}
async function getAllIncomeExpense(req, res) {
  try {
    const data = await IncomeExpense.findAll();
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}
async function getAllBudget(req, res) {
  try {
    const data = await Budget.findAll();
    return res.json(data);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  getAllUser,
  checkUser,
  getAllTransaction,
  getAllCategory,
  getAllIncomeExpense,
  getAllBudget,
};
