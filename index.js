const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("This is a node js.")
})

app.get('/test',(req, res)=>{
    res.send("This is a node js programming")
})