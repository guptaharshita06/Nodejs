const express = require("express");
const bodyParser = require('body-parser');

const app = express();

/* Dummy Middleware 1 */
app.use((req, res, next) => {
    console.log("First Dummy Middleware", req.url, req.method);
    next();
});

/* Dummy Middleware 2 */
app.use((req, res, next) => {
    console.log("Second Dummy Middleware", req.url, req.method);
    next();
});

/* Home Route */
app.get("/", (req, res, next) => {
    res.send("<h1>Welcome to Complete Coding</h1>");
});

/* GET: Contact Us */
app.get("/contact-us", (req, res) => {
    res.send(`
        <h1>Please give your details here</h1>
        <form action="/contact-us" method="POST">
            <input type="text" name="name" placeholder="Enter your name" />
            <br><br>
            <input type="email" name="email" placeholder="Enter your email" />
            <br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post("/contact-us", (req, res, next) => {
    console.log("First Handling", req.url, req.method, req.body);
    next();
})

app.use(bodyParser.urlencoded());


/* POST: Contact Us */
app.post("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us for POST", req.url, req.method, req.body);
    res.send("<h1>We will contact you shortly</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
