import express from 'express';

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.get('/', (req, res) => {
    res.send('Server at http://localhost:5000');
});

app.listen(5000, () => {
    console.log('Server at http://localhost:5000');
})