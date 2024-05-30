import mongoose from "mongoose";

// Replace the uri string with your connection string.
// const uri =
// "mongodb+srv://<username>:<password>@<host>/<dbname>?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/TinyUrlDB";//רשמנו בקובץ תצורה, אז לסנכרןןןן
const uri = process.env.DB_URI;


const connectDB = async () => {
  await mongoose.connect(uri);
};
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
})

database.once('connected', () => {
  console.log('Database Connected');
})

export default connectDB;
