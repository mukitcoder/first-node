const express = require("express");
const app = express();
const port = 5000;

app.get('/', (req, res)=>{
    res.send(' hello from my node')
})

app.listen(port, ()=>{
    console.log("listening to port ", port);
})