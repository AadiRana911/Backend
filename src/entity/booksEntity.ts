import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String},
  price: {type: Number, required: true},
  discountRate: {type: Number},
  carousel: {type: Array},
  createdOn: {type: Date, default: Date.now},
  // Add more properties as needed
});

const Book = mongoose.model('Book', booksSchema);

export default Book;
