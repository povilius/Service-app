"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const User = require('../models/User');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();
// Retrieve all users
router.get('/', authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('from users', req.currentUser);
        const users = yield User.find();
        return res.json(users);
    }
    catch (err) {
        return res.status(500).json(err);
    }
}));
// Update a user by ID
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        return res.json(updatedUser);
    }
    catch (err) {
        return res.status(400).json(err);
    }
}));
// Delete a user by ID
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        return res.json(deletedUser);
    }
    catch (err) {
        return res.status(404).json(err);
    }
}));
module.exports = router;
