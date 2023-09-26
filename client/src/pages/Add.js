import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function Add(){
    const [book,setBook] = useState({
        title:"",
        descp:"",
        price:null,
        cover:"",
    })

    const navigate = useNavigate();
  
    const handleChange = (e) => {
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8000/books",book)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form">
            <h1>Add new book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="desc"  onChange={handleChange} name="descp"/>
            <input type="number" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover pic" onChange={handleChange} name="cover"/>
            <button onClick={handleClick} className="formButton">Add</button>
        </div>
    )
}