const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/indianfood", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("db connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;
