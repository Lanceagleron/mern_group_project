// Import services
const {
    createTable,
    getAllTables,
    getTableById,
    getTableByIdAndUpdate,
    deleteTableById
 } = require('../services/table.service');

// CREATE
const handleCreateTable = async (req, res) => {
    console.log("controller: handleCreateTable");
    try {
        const newTable = await createTable(req.body);
        return res.json(newTable);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// READ
const handleGetAllTables = async (req, res) => {
    console.log("controller: handleGetAllTables");
    try {
        const allTables = await getAllTables();
        return res.json(allTables);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetTableById = async (req, res) => {
    console.log("controller: handle req.params: ", req.params.id);
    try {
        const oneTable = await getTableById(req.params.id);
        return res.json(oneTable);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// UPDATE
const handleGetTableByIdAndUpdate = async (req, res) => {
    console.log("controller: handleGetTableByIdAndUpdate req.params: ", req.params.id, "\nreq.body: ", req.body);
    try {
        const updatedTable = await getTableByIdAndUpdate(req.params.id, req.body);
        return res.json(updatedTable);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// DELETE
const handleDeleteTableById = async (req, res) => {
    console.log("controller: handleDeleteTableById req.params: ", req.params.id);
    try {
        const deletedTable = await deleteTableById(req.params.id);
        return res.json(deletedTable);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Export Controller Methods
module.exports = {
    handleCreateTable: handleCreateTable,
    handleGetAllTables: handleGetAllTables,
    handleGetTableById: handleGetTableById,
    handleGetTableByIdAndUpdate: handleGetTableByIdAndUpdate,
    handleDeleteTableById: handleDeleteTableById
}