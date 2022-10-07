const express = require('express');

const app = express();

const err = new Error("this is an error");

app.get('/getError', (req, res, next) => {
    next(Error('Message'));
});

const errorLogger = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
}

app.use(errorLogger);

const sendError = (err, req, res) => {
    res.status(500).send(err.message);
}
app.use(sendError);


app.listen(4000);