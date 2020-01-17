const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

let port = 1234;
app.listen(port, () => {
    console.log('Application is deployed on port:' + port);
});

