const express = require('express');
const bodyParser = require('body-parser');
const apiRoute = require('./routes/api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', apiRoute);


app.get('/', (req, res) => {
    res.send('Hi There!');
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});