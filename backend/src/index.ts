import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './db';
import { Product } from './models/products';
import bodyParser from "body-parser";
import { Users } from './models/users';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json())


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Express & TypeScript Server');
});

app.get('/products', async (req: Request, res: Response) => {
    const products = await Product.find()
    res.send(products);
});

app.post('/products', async (req: Request, res: Response) => {
    const body= req.body
    const product = await Product.create(body)
    res.send(product);
});
app.post('/users', async (req: Request, res: Response) => {
    const body= req.body
    const user = await Users.create(body)
    res.send(user);
});

app.put('/products/:id', async (req: Request, res: Response) => {

    const productID=req.params.id
    const product = await Product.findByIdAndUpdate(productID, req.body)
    res.send(product);
});
app.delete('/products/:id', async (req: Request, res: Response) => {

    const productID=req.params.id
    const product = await Product.findByIdAndDelete(productID)
    res.send(product);
});

app.listen(port, () => {
    console.log(`Server is Firing at http://localhost:${port}`);
});
connectToDB() 
