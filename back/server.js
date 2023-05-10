const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/dbConfig");
db();
const dotenv = require("dotenv");
dotenv.config();
const PORT = 9000;
app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");
const userRoutes = require("./routes/userRoutes");
const payment = require("./routes/stripe");

app.use("/api/v1", orderRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", payment);

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
