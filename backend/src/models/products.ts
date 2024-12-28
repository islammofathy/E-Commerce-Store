import { model, Schema } from "mongoose";

export interface IProduct {
    name: string;
    size: string;
    avatar: string;
    category: string;
    price: number;
    quantity: number;
}

export const ProductSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    size: { type: String, required: true },
    avatar: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
});

export const Product = model<IProduct>('Product', ProductSchema);
