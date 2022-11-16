const express = require('express');
const router = express.Router();

// Import Controller Methods
const {
    handleCreateMenuItem,
    handleGetAllMenuItems,
    handleGetMenuItemById,
    handleGetMenuItemByIdAndUpdate,
    handleDeleteMenuItemById
} = require('../controllers/menuItem.controller');

// Routes
router.post('/', handleCreateMenuItem);
router.get('/', handleGetAllMenuItems);
router.get('/:id', handleDeleteMenuItemById);
router.put('/:id', handleGetMenuItemByIdAndUpdate);
router.delete('/:id', handleDeleteMenuItemById);

// Export router
module.exports = { menuItemsRouter: router };