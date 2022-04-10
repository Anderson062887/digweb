import "./addInfo.css"
import{useState} from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const AddInfo =(props)=>{
    const [inf,setInf] = useState("")
    const [quantity,setQuantity] = useState("")
 
    const handleSumit = (e)=>{
        
    e.preventDefault();
        //   props.history.push("/tools")
        if(inf !== "" && quantity !== ""){
            props.addinfo({name:inf,quantity})
            setInf("")
           e.target.reset()
        }
      
    }
    const handleChange = ({target})=>{
     setInf(target.value)
    }

    const handleQuantity = ({target})=>{
        setQuantity(target.value)
    }
     return(
         <div className="addform-box">
      
           <form onSubmit={handleSumit}>
           <div className="form-header">
                 <h3>Add Item to the slot</h3>
             <button onClick={props.clearModal}>< AiFillCloseCircle size={24 } color={"rgb(132, 130, 130)"} /></button>
             </div>
             <div className="input-wrap">
             <label htmlFor="info">Item :</label>
             <input id="info" type="text" value={inf} onChange={handleChange}/>
             </div>
             <div className="input-wrap">
             <label htmlFor="info">Quantity:</label>
             <input id="quantity" type="text" value={quantity} onChange={handleQuantity}/>
             </div>
            
             <button className="btn-add">add</button>
           
         </form>
         </div>
     )
 }
 export {AddInfo};