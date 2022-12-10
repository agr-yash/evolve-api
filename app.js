require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const cors = require("cors");

const PORT = process.env.PORT || 5001;

const users_routes = require("./routes/users");

app.use(cors());

app.use("/api/users", users_routes);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`${PORT} Yes I am connected.`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
