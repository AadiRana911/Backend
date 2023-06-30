"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const booksSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    price: { type: Number, required: true },
    discountRate: { type: Number },
    carousel: { type: Array },
    createdOn: { type: Date, default: Date.now },
    // Add more properties as needed
});
const Book = mongoose_1.default.model('Book', booksSchema);
exports.default = Book;
