import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
export default function Update(){
    const [book,setBook] = useState({
        title:"",
        descp:"",
        price:null,
        cover:"",
    })

    const navigate = useNavigate();
    const location = useLocation();

    const bookId = location.pathname.split("/")[2]
    console.log(bookId)
  
    const handleChange = (e) => {
        setBook((prev)=>({...prev,[e.target.name]:e.target.value}));
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.put("http://localhost:8000/books"+bookId,book)
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="form">
            <h1>Update book</h1>
            <input type="text" placeholder="title" onChange={handleChange} name="title"/>
            <input type="text" placeholder="desc"  onChange={handleChange} name="descp"/>
            <input type="number" placeholder="price" onChange={handleChange} name="price"/>
            <input type="text" placeholder="cover pic" onChange={handleChange} name="cover"/>
            <button className="formButton" onClick={handleClick}>Update</button>
        </div>
    )
}