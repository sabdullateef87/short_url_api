const mongoose = require("mongoose");
const URI = process.env.URI;

const connectDB = async () =>
  mongoose.connect(
    URI.toString(),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("Database Connected Successfully !!");
    }
  );
module.exports = connectDB;