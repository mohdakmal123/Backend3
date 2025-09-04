const express = require('express');
const UserRouter = require('./routers/userRouter');

const app = express();
const port = 5000;

//middlewares
app.use(express.json());
app.use('/user', UserRouter);

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