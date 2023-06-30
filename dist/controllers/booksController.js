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
const express_1 = __importDefault(require("express"));
const booksService_1 = require("../services/booksService");
const router = express_1.default.Router();
router.get('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const options = { page, limit };
        const example = yield (0, booksService_1.getBooks)(options);
        res.json(example);
    }
    catch (error) {
        console.error('Error creating example:', error);
        res.status(500).json({ error: 'Failed to create example' });
    }
}));
router.post('/books', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, image, price, discountRate, carousel } = req.body;
        const example = yield (0, booksService_1.createBooks)(title, description, image, price, discountRate, carousel);
        res.json(example);
    }
    catch (error) {
        console.error('Error creating example:', error);
        res.status(500).json({ error: 'Failed to create example' });
    }
}));
// Add more routes and handlers as needed
exports.default = router;
