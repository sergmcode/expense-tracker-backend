
// NODE_ENV=development
// PORT=5001
// MONGO_URI=

const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const transactions_route = require("./routes/transactions");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use("/api/v1/transactions", transactions_route);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.listen(
  port,
  console.log(
    `Server running in mode: ${process.env.NODE_ENV} on port ${port}`.yellow
      .bold
  )
);
