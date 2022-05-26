import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () =>{
    console.log("Database connected");
});

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));


app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x.id === req.params.id);
    if(product){
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not Found' });
    }
})

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.use('/api/users', userRouter)

app.get('/', (req, res) => {
    res.send('Server at http://localhost:5000');
});

app.get((err, req, res, next) => {
    res.status(500).send({message: err.message});
})

const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`Server at http://localhost:${port}`);
});