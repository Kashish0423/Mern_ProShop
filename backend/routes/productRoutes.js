import express from "express";
import asyncHanlder from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// @des Fetch all products
// @ route GET /api/products
// @ Public

router.get(
  "/",
  asyncHanlder(async (req, res) => {
    const products = await Product.find({});

    res.json(products);
  })
);

// @des Fetch single products
// @ route GET /api/products/:id
// @ Public

router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not Found");
    }
  })
);

export default router;
