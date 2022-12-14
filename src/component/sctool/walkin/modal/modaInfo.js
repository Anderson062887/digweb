import React, {useState,useEffect} from "react"
import "./modalInfo.css";
import LocationHistory from "./locationHistory";
import {CloseModal} from "./closeModal";
import Detail from "../modal/Detail";


const ModalInfo = ({data,clearmodal,deleteInfo,clearModalAndEdit,history})=>{

  const {name,quantity,date,itemInformation} = data;


// if(itemInformation !== undefined){
//  const {category,pack_Type,pack_size,pack_unit} = itemInformation;
// }

  const [editing,setEditing] = useState(false)
  const [num,setNum] = useState(quantity);

  useEffect(()=>{
      if(num !== quantity && editing === false)
      clearModalAndEdit({name,quantity:num})
  },)
  //[num,editing]


    return(
       

        <div className="info-container">

            <div className="info-box-wrap">
                
                <CloseModal   clearmodal={clearmodal} editing={editing} date={date} />
            <h1> Item: {name}</h1>         
     {editing === true?
     <div className="input-wrap-edit"> 
          <h3> Quantity :</h3><input onChange={({target})=>setNum(target.value)} value={num} /> 
    </div>:<p>Quantity: {num}</p>}

              {itemInformation &&  <Detail detail={itemInformation} />} 

                 <div className="action-btn-wrap">
                            <button className={ editing === true?"edit-btn btn-inactive":"edit-btn btn-active"} onClick={()=> setEditing(!editing)}>
                            {editing === false?  "Edit":"Done"}
                            </button> 
                            <button   className={editing !== true?"delete-btn":" btn-desabled" } onClick={deleteInfo}>Delete</button> 
                         {/* {editing === true? 
                       <button   className={"delete-btn btn-desabled" } style={{backgroundColor:"white"}}>Delete</button> 
                      : <button   className={"delete-btn" } onClick={deleteInfo}>Delete</button>  } */}
                 </div>
                            
                   
            </div>
            {history.length > 0 && <LocationHistory history={history} /> }
            
        </div>
    )
}

// ModalInfo.propTypes = {
//     data: PropTypes.shape({
//             name: PropTypes.string,
//         quantity: PropTypes.number
//     })
// }
export {ModalInfo};