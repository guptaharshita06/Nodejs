const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');  
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>About Us</h1></body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/contact') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Contact Us</h1></body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
    res.write('</html>');
    res.end();
});
req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    console.log(fullBody);
    const params = new URLSearchParams(fullBody);
    // const bodyObject = {};
    // for(const [key, val] of params.entries()) {
    //     bodyObject[key] = val;
    // }
    const bodyObject = Object.fromEntries(params);
    console.log(bodyObject);
    fs.writeFile('User.txt', JSON.stringify(bodyObject), error => {
        console.log('Data written successfully');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    });
});
// res.statusCode = 302;
// res.setHeader('Location', '/');

res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Complete Coding</title></head>');
res.write('<body><h1>Like / Share / Subscribe</h1></body>');
res.write('</html>');
res.end();

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

module.exports = userRequestHandler;
