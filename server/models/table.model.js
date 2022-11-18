const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: [true, "{PATH} is required."]
    },
    tab: [String],
    open: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Table = mongoose.model("Table", TableSchema);

// Export model
module.exports = { Table: Table };