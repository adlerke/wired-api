import { Response, Request } from "express";
import { Category } from "../../models/Category";

export async function createCategories(req: Request, res: Response) {
    try {
        const { name, icon } = req.body;
        const category = await Category.create({
            name,
            icon,
        });
        res.json(category).status(201);
    } catch (error) {
        res.status(500).json(error);
    }
}
