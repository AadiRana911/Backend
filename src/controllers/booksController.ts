import express from 'express';
import {getBooks, createBooks, PaginationOptions} from '../services/booksService';

const router = express.Router();

router.get('/books', async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const options: PaginationOptions = {page, limit};
    const example = await getBooks(options);
    res.json(example);
  } catch (error) {
    console.error('Error creating example:', error);
    res.status(500).json({error: 'Failed to create example'});
  }
});
router.post('/books', async (req, res) => {
  try {
    const {title, description, image, price, discountRate, carousel} = req.body;
    const example = await createBooks(title, description, image, price, discountRate, carousel);
    res.json(example);
  } catch (error) {
    console.error('Error creating example:', error);
    res.status(500).json({error: 'Failed to create example'});
  }
});

// Add more routes and handlers as needed

export default router;
