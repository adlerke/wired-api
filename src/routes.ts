import path from "node:path";

import { Router } from "express";
import { createCategories } from "./app/useCases/categories/create";
import { getCategories } from "./app/useCases/categories/get";
import { getProducts } from "./app/useCases/products/get";
import multer from "multer";
import { createProducts } from "./app/useCases/products/create";
import { getProductByCategory } from "./app/useCases/categories/getProductByCategory";
import { getOrders } from "./app/useCases/orders/get";
import { createOrders } from "./app/useCases/orders/create";
import { updateOrder } from "./app/useCases/orders/update";
import { deleteOrder } from "./app/useCases/orders/delete";

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, "..", "uploads"));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    }),
});
//Get Categories
router.get("/categories", getCategories);

//Create Categories
router.post("/categories", createCategories);

// Get Products
router.get("/products", getProducts);

//Create Products
router.post("/products", upload.single("image"), createProducts);

// Get Products by category
router.get("/categories/:categoryId/products", getProductByCategory);

// Get Orders
router.get("/orders", getOrders);

//Create Products
router.post("/orders", createOrders);

// Update Orders
router.patch("/orders/:orderId", updateOrder);

// Delete Orders
router.delete("/orders/:orderId", deleteOrder);
