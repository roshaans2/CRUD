const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(cors())

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
    const q = "INSERT INTO books (`title`,`descp`,`price`,`cover`) VALUES (?,?,?,?)"
    const values = [
        req.body.title,
        req.body.descp,
        req.body.price,
        req.body.cover
    ]

    db.query(q,values,(err,data)=>{
        if(err) res.json(err)
        return res.json("Book has been created successfully")
    })
})

app.delete("/books:id",(req,res)=>{
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?"

    db.query(q,[bookId],(err,data)=>{
        if(err) res.json(err)
        return res.json("Book has been deleted successfully")
    })
})

app.listen(8000,()=>{
    console.log("Connected to Backend");
})