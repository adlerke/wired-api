import { Response, Request } from "express";
import { Order } from "../../models/Order";

export async function getOrders(req: Request, res: Response) {
    try {
        const orders = await Order.find()
            .sort({ createdAt: 1 })
            .populate("products.product");

        res.json(orders).status(200);
    } catch (error) {
        res.status(500);
    }
}
