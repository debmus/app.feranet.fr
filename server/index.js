const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//const execSync = require('child_process').execSync;

app.use(cors());
app.use(bodyParser.json());

//var messages = ["Casablanca", "Rabat", "Fes"];
//const stdout = execSync('ls -l1');
//var messages = stdout = execSync('curl -s https://4.icanhazip.com/');
//var messages2 = stdout = execSync('curl -s https://6.icanhazip.com/');

app.get('/ip', (req, res) => {
    //res.send(req.ip);
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json(ip);
});

/*  app.post('/messages', (req, res) => {
    let msg = req.body
    console.log(msg);
    messages.push(msg.message);
    res.json(msg);
    console.log(messages);
    //console.log(`stdout: ${stdout}`);
})  */

app.listen(port, () => console.log('http://localhost:3000'));