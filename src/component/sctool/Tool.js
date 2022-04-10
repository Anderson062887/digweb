import React,{useState} from "react";
import Walkin from "../walkin/walk";
import "./tool.css";



const Info =(props)=>{
   const [inf,setInf] = useState("")

   const handleSumit = (e)=>{
       
   e.preventDefault();
         props.history.push("/tools")
         setInf("")
        e.target.reset()
   }
   const handleChange = ({target})=>{
    setInf(target.value)
   }
    return(
        <form onSubmit={handleSumit}>
            <input type="text" value={inf} onChange={handleChange}/>
            <button>add info</button>
        </form>
    )
}

const Tool = ({match})=>{


    return(

        <div>
            <Walkin />
        </div>
    )
}
export  default Tool;