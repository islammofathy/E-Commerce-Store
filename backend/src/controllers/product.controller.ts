import { Request, Response } from 'express';
import { Product } from "../models/products";

export const listProducts = async (req: Request, res: Response) => {
    const { search } = req.query; // Extract the search query parameter
    const filter = search
        ? { name: { $regex: search, $options: 'i' } } // Case-insensitive search by name
        : {};

    const products = await Product.find(filter);
    res.send(products);
}

export const getProduct = async (req: Request, res: Response) => {
    const productID = req.params.id
    const product = await Product.findById(productID)
    res.send(product);
}

export const createProduct = async (req: Request, res: Response) => {
    const body = req.body
    const product = await Product.create(body)
    res.send(product);
}

export const updateProduct = async (req: Request, res: Response) => {
    const productID = req.params.id
    const product = await Product.findByIdAndUpdate(productID, req.body)
    res.send(product);
}

export const deleteProduct = async (req: Request, res: Response) => {
    const productID = req.params.id
    const product = await Product.findByIdAndDelete(productID)
    res.send(product);
}
