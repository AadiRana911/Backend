import express from 'express';
import {connect} from './db';
import booksController from './controllers/booksController';

const app = express();

app.use(express.json());

// Connect to MongoDB
connect();

// Register the example controller routes
app.use('/api', booksController);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
