require('./database/sync');

const express = require("express");

const connection = require("./database/connection");
const app = express();
const port = process.env.PORT || 3000;

const typeUserRouter = require('./routers/typeUserRouter')
const userRouter = require('./routers/userRouter')
const restaurantRouter = require('./routers/restaurantRouter')
const tableRouter = require('./routers/tableRouter')
const bookingRouter = require('./routers/bookingRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`La aplicación está corriendo en el puerto ${port}`);
});


app.use('/api', typeUserRouter);
app.use('/api', userRouter);
app.use('/api', restaurantRouter);
app.use('/api', tableRouter);
app.use('/api', bookingRouter);