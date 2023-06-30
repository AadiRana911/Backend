import mongoose, {ConnectOptions} from 'mongoose';

async function connect() {
  try {
    await mongoose.connect('mongodb+srv://asadimtiaz711:Asad%407262@cluster0.kn93eli.mongodb.net/books_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

export {connect};
