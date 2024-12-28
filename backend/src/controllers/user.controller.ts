import { Request, Response } from 'express';
import { Users } from "../models/users";

export const createUser = async (req: Request, res: Response) => {
    const body = req.body
    const user = await Users.create(body)
    res.send(user);
}

export const loginUser = async (req: Request, res: Response) => {
    const body = req.body
    const user = await Users.findOne({email: body.email, password: body.password})
    res.send(user);
}