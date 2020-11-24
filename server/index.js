const express = require('express');
const app = express();
const port = 3000;

app.get('/messages', (req, res) => {
    const messages = ["1", "2", "3"]
    res.send(messages);
});

app.listen(port, () => console.log('http://localhost:3000'));