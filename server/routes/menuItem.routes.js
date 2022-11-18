const express = require('express');
const router = express.Router();

// Import Controller Methods
const {
    handleCreateMenuItem,
    handleGetAllMenuItems,
    handleGetMenuItemById,
    // handleGetManyMenuItemsById,
    handleGetMenuItemByIdAndUpdate,
    handleDeleteMenuItemById
} = require('../controllers/menuItem.controller');

// Routes
router.post('/', handleCreateMenuItem);
router.get('/', handleGetAllMenuItems);
router.get('/:id', handleGetMenuItemById);
router.put('/:id', handleGetMenuItemByIdAndUpdate);
router.delete('/:id', handleDeleteMenuItemById);

// Export router
module.exports = { menuItemsRouter: router };