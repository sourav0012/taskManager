const express = require("express");
const taskRoute = require("./routes/taskroute");
const cors = require("cors");


const app = express();
const port=5000;


app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({extended: true}))

//importing routes
app.use('/task', taskRoute);

app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`);
})