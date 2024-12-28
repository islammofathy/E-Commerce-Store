import { Request, Response } from 'express';
import { Order } from "../models/orders";

export const createOrder = async (req: Request, res: Response) => {
    const body = req.body
    const order = await Order.create({...body, createdAt: new Date().toISOString()})
    res.send(order);
}

export const getOrders = async (req: Request, res: Response) => {
    const userId = req.params.userId
    const orders = await Order.find({userId: userId})
    res.send(orders);
}