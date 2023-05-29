const db = require("../db/models/index");

const { Category, UserCategory } = db;

async function newCategory(req, res) {
  const { name, color, incomeExpenseId } = req.body;
  try {
    const newCategory = await Category.create({
      name: name,
      color: color,
      incomeExpenseId: incomeExpenseId,
    });
    return res.json(newCategory);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

// add category and user id to user_category table
async function addUserCategory(req, res) {
  const { userId, categoryId } = req.body;
  try {
    const newUserCategory = await UserCategory.create({
      updated_at: new Date(),
      created_at: new Date(),
      userId: userId,
      categoryId: categoryId,
    });
    return res.json(newUserCategory);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function editCategory(req, res) {
  try {
    let categoryToAdd = req.body;
    let categoryToReplace = req.params.categoryId;
    let categoryToEdit = await Category.findByPk(categoryToReplace);
    await categoryToEdit.update(categoryToAdd);
    let allCategories = await Category.findAll();
    return res.json(allCategories);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

async function deleteCategory(req, res) {
  try {
    const { categoryId } = req.params;
    await Category.destroy({ where: { id: categoryId } });
    let allCategories = await Category.findAll();
    return res.json(allCategories);
  } catch (err) {
    return res.status(400).json({ error: true, msg: err });
  }
}

module.exports = {
  newCategory,
  editCategory,
  deleteCategory,
  addUserCategory,
};
