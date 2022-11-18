// Import model
const { MenuItem } = require('../models/menuItem.model');

// CREATE
const createMenuItem = async (data) => {
    console.log("service: createMenuItem");
    const newMenuItem = await MenuItem.create(data);
    return newMenuItem;
}

// READ
const getAllMenuItems = async () => {
    console.log("service: getAllMenuItems");
    const allMenuItems = await MenuItem.find();
    return allMenuItems;
}

// const getManyMenuItemsById = async (ids) => {
//     console.log("service: getManyMenuItemsById");
//     const selectedMenuItems = await MenuItem.find({'_id': { $in: ids }});
//     return selectedMenuItems;
// }

const getMenuItemById = async (id) => {
    console.log("service: getMenuItemById");
    const oneMenuItem = await MenuItem.findById(id);
    return oneMenuItem;
}

// UPDATE
const getMenuItemByIdAndUpdate = async (id, data) => {
    console.log("service: getMenuItemByIdAndUpdate");
    const updatedMenuItem = await MenuItem.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return updatedMenuItem;
}

// DELETE
const deleteMenuItemById = async (id) => {
    console.log("service: deleteMenuItemById");
    const deletedMenuItem = await MenuItem.findByIdAndDelete(id);
    return deletedMenuItem;
}

// Export services
module.exports = {
    createMenuItem: createMenuItem,
    getAllMenuItems: getAllMenuItems,
    getMenuItemById: getMenuItemById,
    getMenuItemByIdAndUpdate: getMenuItemByIdAndUpdate,
    // getManyMenuItemsById: getManyMenuItemsById,
    deleteMenuItemById: deleteMenuItemById
}