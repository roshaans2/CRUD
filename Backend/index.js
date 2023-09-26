const express = require("express")
const mysql = require("mysql")

const app = express();

app.use(express.json())

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

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`,`descp`,`cover`) VALUES (?,?,?)"
    const values = [
        req.body.title,
        req.body.descp,
        req.body.cover
    ]

    db.query(q,values,(err,data)=>{
        if(err) res.json(err)
        return res.json("Book has been created successfully")
    })
})


app.listen(8000,()=>{
    console.log("Connected to Backend");
})