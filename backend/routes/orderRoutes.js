import express from "express";
const router = express.Router();
import { addOrderItems, getOrderById } from "../controllers/orderController.js";
import { getProductById } from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
router.route("/:id").get(protect, getOrderById);

export default router;
