"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bookingSchema = new mongoose_1.Schema({
    businessId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true, // Custom error message for required field
    },
    date: {
        type: Date,
        required: [true, 'field is required. e.g. 2022-04-28'], // Ensuring date is provided
    },
    time: {
        type: String,
        required: [true, 'field is required. e.g. 14:00'], // Time must be provided
    },
    userEmail: {
        type: String,
        required: [true, 'field is required.'], // Email is necessary for contact
        validate: {
            validator: function (email) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message: (props) => `${props.value} is not a valid email!`, // Custom message for invalid email
        },
    },
    userName: {
        type: String,
        required: true, // Name is necessary
    },
    status: {
        type: String,
        required: [true, 'Booking status is required.'], // Status must be provided
        enum: {
            values: ['confirmed', 'pending', 'cancelled'],
            message: '{VALUE} is not supported', // Custom message if an unsupported value is provided
        },
    },
});
exports.default = mongoose_1.default.model('Booking', bookingSchema);
