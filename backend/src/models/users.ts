import { model, Schema } from "mongoose";

interface IUsers {
    name: string;
    email: string;
    password: string;
}
const UsersSchema = new Schema<IUsers>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: {type: String, required: true},
});

export const Users = model<IUsers>('user', UsersSchema);