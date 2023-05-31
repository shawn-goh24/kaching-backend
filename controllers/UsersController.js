const db = require("../db/models/index");

const { User, Transaction, IncomeExpense, Budget, Category, UserCategory } = db;

// user ? continue : add
async function checkUser(req, res) {
  const currUser = req.body.user;
  try {
    const [user, created] = await User.findOrCreate({
      where: { email: currUser.email },
      defaults: {
        firstName: currUser.given_name,
        lastName: currUser.family_name,
        imageUrl: currUser.picture,
      },
    });

    if (created) {
      const categoryData = await Category.findAll({
        where: {
          defaultCategory: true,
        },
      });
      const categoryDataJson = JSON.parse(JSON.stringify(categoryData));
      createTransaction(user.id, categoryDataJson);
    }

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

// get user category
async function getUserCategories(req, res) {
  const { userId } = req.params;
  try {
    const user = await User.findByPk(userId, {
      include: Category,
    });
    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function updateUser(req, res) {
  try {
    let userToAdd = req.body;
    let userToReplace = req.params.userId;
    let userToEdit = await User.findByPk(userToReplace);
    await userToEdit.update(userToAdd);
    return res.json(userToEdit);
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

async function getAllIncomeExpense(req, res) {
  try {
    console.log("here");
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

const createTransaction = (id, categories) => {
  categories.forEach(async (category, index) => {
    const newUserCategory = await UserCategory.create({
      userId: id,
      categoryId: category.id,
    });
  });
  console.log("added");
};

module.exports = {
  getAllUser,
  checkUser,
  getAllTransaction,
  getAllIncomeExpense,
  getAllBudget,
  getUserCategories,
  updateUser,
};
