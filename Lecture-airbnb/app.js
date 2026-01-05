//External Module
const express = require('express');

//Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();

// app.use((req, res, next) => {
//     console.log(req.url, req.method);
//     next();
// })

app.use(express.urlencoded()); // to parse form data

app.use(userRouter);
app.use(hostRouter);

// app.get("/", (req, res, next) => {
//     res.send(`<h1>Welcome to airbnb</h1>
//         <a href="/host/add-home">Add Home</a>`);
// })

// app.get("/host/add-home", (req, res, next) => {
//     res.send(`<h1>Register your home here: </h1>
//         <form action="/host/add-home" method="POST"> 
//             <input type="text" name="houseName" placeholder="Enter the name of your house"/>
//             <input type="submit"/>
//         </form>
//         `);
// })

// app.post("/host/add-home", (req, res, next) => {
//     console.log(req.body);
//     res.send(`<h1>Home Registered Successfully </h1>
//         <a href="/">Go to Home</a>
//         `);
// })

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
