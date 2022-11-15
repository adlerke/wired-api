import { Response, Request } from "express";
import { Product } from "../../models/Product";

export async function getProducts(req: Request, res: Response) {
    try {
        const products = await Product.find();

        res.json(products).status(200);
    } catch (error) {
        res.status(500);
    }
}
