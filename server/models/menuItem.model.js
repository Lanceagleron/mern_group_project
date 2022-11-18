const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "{PATH} is required."]
    },
    description: {
        type: String,
        required: [true, "{PATH} is required."]
    },
    src: {
        type: String,
        required: [true, "{PATH} is required."]
    },
    price: {
        type: Number,
        set: v => v*100,
        get: v => (v/100).toFixed(2),
        required: [true, "{PATH} is required."]
    },
    inStock: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        required: [true, "{PATH} is required."]
    }
}, { timestamps: true,
    toJSON: { getters: true }
 })

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

// Export model
module.exports = { MenuItem: MenuItem };