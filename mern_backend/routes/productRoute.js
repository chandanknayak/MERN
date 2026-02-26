import {
  addProduct,
  showProducts,
  deleteProduct,
} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.post("/",addProduct)
productRouter.get("/", showProducts);
productRouter.delete("/:id", deleteProduct);
export default productRouter;