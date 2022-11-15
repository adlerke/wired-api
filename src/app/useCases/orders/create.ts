import { Response, Request } from "express";
import { Order } from "../../models/Order";

export async function createOrders(req: Request, res: Response) {
    try {
        const { table, products } = req.body;
        const order = await Order.create({
            table,
            products,
        });
        res.json(order).status(201);
    } catch (error) {
        res.status(500).json(error);
    }
}
