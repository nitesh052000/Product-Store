import express from "express";
import {
  getAllProduct,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProduct);

router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
