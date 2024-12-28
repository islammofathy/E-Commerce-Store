import { Product } from "./product";

export interface Order {
    _id: string;
    userId: string;
    products: Product[];
    totalAmount: number;
    status: string;
    createdAt: string;
}