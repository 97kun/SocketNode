const express = require('express');
const app = express();
const socket = require('./socket');

app.get('/', (req, res) => {
    res.send('0.0')
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('server running on' + port)
});

socket.listen(server);
