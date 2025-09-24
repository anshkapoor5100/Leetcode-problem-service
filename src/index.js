const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes');
const mongoose = require('mongoose');
const { PORT } = require('./config/server.config');
const BaseError = require('./errors/base.error');
const {StatusCodes} = require('http-status-codes');
const BadRequest = require('./errors/badrequest.error');
const errorHandler = require('./utils/errorhandler');
const connectToDb = require('./config/db.config');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


app.use('/api', apiRouter);
app.get('/ping', (req, res) => {
    res.send('Problem Service is alive');
});

//last middleware if any error come
app.use(errorHandler);
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDb();
    console.log("connected to db");
});