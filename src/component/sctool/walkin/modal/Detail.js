import {useReducer} from "react"
import {IoIosInformationCircle} from "react-icons/io"

const Detail = ({detail})=>{
  const [open,setOpen] = useReducer(open => !open)

const {category,pack_Type,pack_size,pack_unit} = detail;
    return(
         <div>
             <span style={{display:"flex",alignItems:"center"}}>
<button
 style={{backgroundColor:"blue", width:"14%",marginRight:"10px"}}
onClick={setOpen}>

                 <IoIosInformationCircle size={30}/>
                 </button>
                 <h3>Item detail information</h3>
                 </span>

          {  open && <div className="grow-slow">
             
                    <small>category -- {category}</small><br />
                    <small>pack type -- {pack_Type}</small><br />
                    <small> pack size -- {pack_size}</small><br />
                    <small>unit -- {pack_unit}</small><br />
    
             </div>}

         </div>
    )
}
export default Detail;