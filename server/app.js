const express = require("express");
const http = require("http");
const app = express();
const bodyParser = require("body-parser");
const database = require("./db");
const path = require('path');

app.use(express.static(path.join(__dirname,'..','client','dist')));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", require('./router'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'..','client','dist', 'index.html'));
});

const server = http.createServer(app);

database.connect()
    .then(startServer)
    .catch((err) => console.log("ERROR", err));

function startServer() {
    server.listen(3000, () => {
        console.log("START on 3000");
    })
}
