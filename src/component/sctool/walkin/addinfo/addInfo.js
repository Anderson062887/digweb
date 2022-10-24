import "./addInfo.css"
import{useState,useEffect} from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import {GetAllItems} from "../../../../util/restaurantApi/itemsApi";

const AddInfo =(props)=>{
    const [inf,setInf] = useState("")
    const [quantity,setQuantity] = useState("");
    const [items,setItems] = useState([]);


    useEffect(()=>{
        GetAllItems()
        .then(d => setItems(d.itemsList))
        .catch(e => console.log(e))
    },[])
 
    const handleSumit = (e)=>{
        
    e.preventDefault();
        //   props.history.push("/tools")
        if(inf !== "" && quantity !== ""){
           
            const itemDetails = items.filter((i)=> i.name === inf) 
            props.addinfo({name:inf,quantity,detail:itemDetails})
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
             <span onClick={props.clearModal} style={{cursor:"pointer"}}>< AiFillCloseCircle size={30 } color={"rgb(132, 130, 130)"} /></span>
             </div>
             <div className="input-wrap">
             <label htmlFor="info">Item :</label>
             {/* <input id="info" type="text" value={inf} onChange={handleChange}/> */}
             {items.length > 0 && 
                  <select name="info" onChange={handleChange} value={inf}>
                       <option value="">--Please choose an option--</option>
                        { items.map(v => <option key={v._id} value={v.name}>{v.name}</option>)}
                   </select> 
            }
             </div>

        
             <div className="input-wrap">
             <label htmlFor="info">Quantity:</label>
             <input id="quantity" type="number" value={quantity} onChange={handleQuantity}/>
             </div>
            
             <button className="btn-add">add</button>
           
         </form>
         </div>
     )
 }
 export {AddInfo};