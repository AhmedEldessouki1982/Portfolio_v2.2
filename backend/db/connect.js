// importing mongoose
const mongoose = require('mongoose');
//connect to db

const connectDB = async (db_URI) => {
    try {
        const conn = await mongoose.connect(db_URI, {
      useNewUrlParser: true,
    })
    console.log(`MongoDB Connected: {conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
module.exports = connectDB;

