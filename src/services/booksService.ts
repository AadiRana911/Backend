import Book from '../entity/booksEntity';

export type PaginationOptions = {
  page: number;
  limit: number;
}

async function getBooks(options: PaginationOptions) {
  const {page, limit} = options;
  const skip = (page - 1) * limit;
  const length = await Book.countDocuments();
  const books = await Book.find().skip(skip).limit(limit).sort({createdOn: 'desc'});
  return {books, length};
}

async function createBooks(title: string, description: string, image: string, price: Number, discountRate: Number, carousel: Array<String>) {
  const book = new Book({title, description, image, price, discountRate, carousel});
  await book.save();
  return book;
}
// Add more service methods as needed

export {getBooks, createBooks};
