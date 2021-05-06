import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

dotenv.config();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is runinng ...");
});

// app.post("/api/users/login", (req, res) => {
//   console.log("okayyy");
//   res.send("ello");
// });

app.use("/api/products", productRoutes);

app.use("/api/users", userRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
