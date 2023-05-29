const express = require("express");
const categoryController = require("../controllers/CategoriesController");

const router = express.Router();

// Add category -  USED
router.post("/new", categoryController.newCategory);

// Add user and category to user_categories table - USED
router.post("/add", categoryController.addUserCategory);

// Edit category - USED
router.put("/edit/:categoryId", categoryController.editCategory);

// Delete category - USED
router.delete("/delete/:categoryId", categoryController.deleteCategory);

module.exports = router;
