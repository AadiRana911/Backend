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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooks = exports.getBooks = void 0;
const booksEntity_1 = __importDefault(require("../entity/booksEntity"));
function getBooks(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { page, limit } = options;
        const skip = (page - 1) * limit;
        const length = yield booksEntity_1.default.countDocuments();
        const books = yield booksEntity_1.default.find().skip(skip).limit(limit).sort({ createdOn: 'desc' });
        return { books, length };
    });
}
exports.getBooks = getBooks;
function createBooks(title, description, image, price, discountRate, carousel) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = new booksEntity_1.default({ title, description, image, price, discountRate, carousel });
        yield book.save();
        return book;
    });
}
exports.createBooks = createBooks;