// Import services
const {
    createMenuItem,
    getAllMenuItems,
    getMenuItemById,
    getMenuItemByIdAndUpdate,
    deleteMenuItemById
} = require('../services/menuItem.service');

// CREATE
const handleCreateMenuItem = async (req, res) => {
    console.log("controller: handleCreateMenuItem");
    try {
        const newMenuItem = await createMenuItem(req.body);
        return res.json(newMenuItem);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// READ
const handleGetAllMenuItems = async (req, res) => {
    console.log("controller: handleGetAllMenuItems");
    try {
        const allMenuItems = await getAllMenuItems();
        return res.json(allMenuItems);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetMenuItemById = async (req, res) => {
    console.log("controller: handleGetMenuItemById req.params: ", req.params.id);
    try {
        const oneMenuItem = await getMenuItemById(req.params.id);
        return res.json(oneMenuItem);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// UPDATE
const handleGetMenuItemByIdAndUpdate = async (req, res) => {
    console.log("controller: handleGetMenuItemByIdAndUpdate req.params: ", req.params.id, "\n req.body:", req.body);
    try {
        const updatedMenuItem = await getMenuItemByIdAndUpdate(req.params.id, req.body);
        return res.json(updatedMenuItem);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// DELETE
const handleDeleteMenuItemById = async (req, res) => {
    console.log("controller: handle deleteMenuItemById req.params: ", req.params.id);
    try {
        const deletedMenuItem = await deleteMenuItemById(req.params.id);
        return res.json(deletedMenuItem);
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Export Controller Methods
module.exports = {
    handleCreateMenuItem: handleCreateMenuItem,
    handleGetAllMenuItems: handleGetAllMenuItems,
    handleGetMenuItemById: handleGetMenuItemById,
    handleGetMenuItemByIdAndUpdate: handleGetMenuItemByIdAndUpdate,
    handleDeleteMenuItemById: handleDeleteMenuItemById
}