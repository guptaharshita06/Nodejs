//This is user.js which handles user server

const http = require('http');
const fs = require('fs');

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter your name"/><br><br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male"/><br>');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"/><br><br>');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } 
    else if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);

            // Example output: username=Rachit&gender=male
            const userData = parsedBody.replace(/&/g, ', ');

            fs.writeFileSync('userDetails.txt', userData);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    } 
    else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><h1>Page Not Found</h1></body></html>');
        res.end();
    }
};

const server = http.createServer(userRequestHandler);

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
