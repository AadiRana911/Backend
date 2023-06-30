"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const booksController_1 = __importDefault(require("./controllers/booksController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Connect to MongoDB
(0, db_1.connect)();
// Register the example controller routes
app.use('/api', booksController_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
