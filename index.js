const express = require('express');
const UserRouter = require('./routers/userRouter');
const ProductRouter = require('./routers/productRouter');
const cors = require('cors');

const app = express();
const port = 5000;

//middlewares
app.use(cors({
    origin: ['http://localhost:3000'],
}))
app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', ProductRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('add response from express');
});

// getall
// delete

app.listen(port, () => {
    console.log('server started');
});