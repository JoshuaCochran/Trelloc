const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    boardId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    position: {
        type: Number,
        required: false
    },
});

module.exports = Board = mongoose.model('list', ListSchema);