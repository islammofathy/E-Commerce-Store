import { model, Schema } from "mongoose";
import { IProduct, ProductSchema } from "./products";

interface IOrder {
    userId: string;
    products: IProduct[];
    totalAmount: number;
    status: string;
    createdAt: string;
}

const OrderSchema = new Schema<IOrder>({
    userId: { type: String, required: true },
    products: [ProductSchema],
    totalAmount: { type: Number, required: true },
    status: { type: String, required: true },
    createdAt: { type: String, required: true },
});

export const Order = model<IOrder>('Order', OrderSchema);
