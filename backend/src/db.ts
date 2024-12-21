import { connect } from "mongoose";

export const connectToDB = () => {
    connect('mongodb+srv://admin:admin@ecommerce-store.vwag8.mongodb.net/store');
}