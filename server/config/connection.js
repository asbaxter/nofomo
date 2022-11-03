const mongoose = require("mongoose");

const uri =
  "mongodb+srv://patrick:nofomo@nofomo.76lpu4l.mongodb.net/nofomo?retryWrites=true&w=majority";

mongoose
  .connect(
    uri,
    // process.env.MONGODB_URI || "mongodb://localhost:27017/nofomo",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB: `, error.message);
  });

module.exports = mongoose.connection;
