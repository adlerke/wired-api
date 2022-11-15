import { Response, Request } from "express";
import { Category } from "../../models/Category";

export async function getCategories(req: Request, res: Response) {
    try {
        const categories = await Category.find();

        res.json(categories).status(200);
    } catch (error) {
        res.status(500);
    }
}
