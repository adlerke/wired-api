import { Response, Request } from "express";
import { Product } from "../../models/Product";

export async function getProductByCategory(req: Request, res: Response) {
    try {
        const { categoryId } = req.params;
        const products = await Product.find()
            .where("category")
            .equals(categoryId);

        res.json(products).status(200);
    } catch (error) {
        res.status(500);
    }
}
