import { Response, Request } from "express";
import { Product } from "../../models/Product";

export async function createProducts(req: Request, res: Response) {
    try {
        const imagePath = req.file?.filename;

        const { name, price, description, igredients, category } = req.body;
        const products = await Product.create({
            name,
            price: Number(price),
            description,
            igredients: JSON.parse(igredients) ?? [],
            imagePath,
            category,
        });
        res.json(products).status(201);
    } catch (error) {
        res.status(500).json(error);
    }
}
