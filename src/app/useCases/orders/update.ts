import { Response, Request } from "express";
import { Order } from "../../models/Order";

const STATUS_ARRAY = ["WAITING", "IN_PRODUCTION", "DONE"];

export async function updateOrder(req: Request, res: Response) {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        if (!STATUS_ARRAY.includes(status)) {
            return res.status(400).json({
                error: "Status inválido",
            });
        }

        await Order.findByIdAndUpdate(orderId, { status });

        res.sendStatus(204);
    } catch (error) {
        res.status(500);
    }
}
