// Import model
const { Table } = require('../models/table.model');

// CREATE
const createTable = async (data) => {
    console.log("service: createTable");
    const newTable = await Table.create(data);
    return newTable;
}

// READ
const getAllTables = async () => {
    console.log("service: getAllTables");
    const allTables = await Table.find();
    return allTables;
}

const getTableById = async (id) => {
    console.log("service: getTableById");
    const oneTable = await Table.findById(id);
    return oneTable;
}

// UPDATE
const getTableByIdAndUpdate = async (id, data) => {
    console.log("service: getTableByIdAndUpdate");
    const updatedTable = await Table.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    })
    return updatedTable;
}

// DELETE
const deleteTableById = async (id) => {
    console.log("service: deleteTableById");
    const deletedTable = await Table.findByIdAndDelete(id);
    return deletedTable;
}

// Export services
module.exports = {
    createTable: createTable,
    getAllTables: getAllTables,
    getTableById: getTableById,
    getTableByIdAndUpdate: getTableByIdAndUpdate,
    deleteTableById: deleteTableById
}