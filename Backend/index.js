const express = require("express")
const mysql = require("mysql")

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Datascience@2024",
    database:"test"
})

app.get("/",(req,res)=>{
    res.send("Hello this is Backend")
})

app.get("/books",(req,res)=>{
    const q = "SELECT * FROM books";
    db.query(q,(err,data)=>{
        if(err) res.json(err)
        return res.json(data)
    })
})


app.listen(8000,()=>{
    console.log("Connected to Backend");
})