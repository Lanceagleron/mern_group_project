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
        type: mongoose.Types.Decimal128,
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
}, { timestamps: true })

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

// Export model
module.exports = { MenuItem: MenuItem };