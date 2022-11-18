const express = require('express');
const router = express.Router();

// Import Controller Methods
const {
    handleCreateTable,
    handleGetAllTables,
    handleGetTableById,
    handleGetTableByIdAndUpdate,
    handleDeleteTableById
} = require('../controllers/table.controller');

// Routes
router.post('/', handleCreateTable);
router.get('/', handleGetAllTables);
router.get('/:id', handleGetTableById);
router.put('/:id', handleGetTableByIdAndUpdate);
router.delete('/:id', handleDeleteTableById);

// Export router
module.exports = { tablesRouter: router };