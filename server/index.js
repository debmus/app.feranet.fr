const http = require('http');
const express = require('express');
const path = require('path');

const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.static("express"));
//const execSync = require('child_process').execSync;

app.use(cors());
app.use(bodyParser.json());

//const stdout = execSync('ls -l1');
//var messages = stdout = execSync('curl -s https://4.icanhazip.com/');

app.get('/ip', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json(ip);
});

app.use('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

const server = http.createServer(app);
const port = 3000;
server.listen(port); console.debug('Server listening on : http://localhost:' + port);