//Core Modules
const http = require('http');

// External Modules
const express = require('express');

//Local Modules
const requestHandler = require('./user');

const app = express();

app.use((req, res, next) => {
    console.log("Came in first middleware", req.url, req.method);
    next();
});

app.use((req, res, next) => {
    console.log("Came in second middleware", req.url, req.method);
    res.send("<p>Welcome to complete coding     Node.js series</p>");
});

const server = http.createServer(requestHandler);

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost: ${PORT}`);
});
