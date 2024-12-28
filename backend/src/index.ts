import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './db';
import { Product } from './models/products';
import bodyParser from "body-parser";
import cors from "cors";
import { Users } from './models/users';
import { createProduct, deleteProduct, getProduct, listProducts, updateProduct } from './controllers/product.controller';
import { createUser, loginUser } from './controllers/user.controller';
import { createOrder, getOrders } from './controllers/orders.controllers';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});


/**Product routes */

app.get('/products', listProducts);

app.get('/products/:id', getProduct);

app.post('/products',createProduct);

app.put('/products/:id', updateProduct);

app.delete('/products/:id', deleteProduct);


/**User routes */

app.post('/users', createUser);

app.post('/login', loginUser);


/**Order routes */

app.post('/orders', createOrder);

app.get('/orders/:userId', getOrders);


app.listen(port, () => {
    console.log(`Server is firing at http://localhost:${port}`);
});
connectToDB() 
