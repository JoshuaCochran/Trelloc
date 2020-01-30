const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: true
    },
    listId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    position: {
        type: Number,
        required: false
    },
});

module.exports = Card = mongoose.model('card', CardSchema);