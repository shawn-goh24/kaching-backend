const express = require("express");
const categoryController = require("../controllers/CategoriesController");

const router = express.Router();

// Add category
router.post("/new", categoryController.newCategory);

// Add user and category to user_categories table
router.post("/add", categoryController.addUserCategory);

// Edit category
router.put("/edit/:categoryId", categoryController.editCategory);

// Delete category
router.delete("/delete/:categoryId", categoryController.deleteCategory);

module.exports = router;
