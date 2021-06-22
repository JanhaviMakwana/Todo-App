const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/route');
const db = require('./config/database');

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type', 'Origin', 'X-Auth-Token'],
    'credentials': true,
    'origin': 'http://localhost:3000',
    'methods': 'GET, HEAD, PUT,POST,DELETE'
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use(routes);

const server = require('http').createServer(app);

db.sync({ force: false })
    .then(res => {
        server.listen(8080);
    })
    .catch(err => console.log(err));

