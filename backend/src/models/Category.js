"use strict";
const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#000000',
    },
    url: {
        type: String,
        default: 'https://img.icons8.com/?size=100&id=6644&format=png&color=000000',
    },
});
module.exports = mongoose.model('Category', categorySchema);
