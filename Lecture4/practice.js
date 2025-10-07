const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    if (req.url === '/home') {
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    } else if(req.url === '/men') {
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    } else if(req.url === '/women') {
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    } else if(req.url === '/kids') {
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    } else if(req.url === '/cart') {
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    }   
    res.write(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <nav>
        <ul>
            <li><a href="/Home"></a>Home</li>
            <li><a href="/men"></a>Men</li>
            <li><a href="/women"></a>Women</li>
            <li><a href="/kids"></a>Kids</li>
            <li><a href="/cart"></a>Cart</li>
        </ul>
    </nav>
</body>
</html>
    `);
});

server.listen(3001, () => {
    console.log('Server running on adress http://localhost:3001');
});
