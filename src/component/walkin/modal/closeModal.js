import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

export const CloseModal = ({clearmodal,editing,date})=>(
    console.log(new Date(date))||
    <div className="closeModal">
   {editing === true?
    <h3 style={{marginRight:"auto"}}>Edit mode active</h3>: 
    date !== undefined && <span> Created on: {new Date(date).toLocaleDateString()}</span> }

   <button onClick={clearmodal} style={{backgroundColor:"transparent",color:"white", border:"none"}}><AiFillCloseCircle size={30}  color={"rgb(132, 130, 130)"}></AiFillCloseCircle></button>
   </div>
)

CloseModal.propTypes = {
    date:PropTypes.string,
    editing:PropTypes.bool,
    clearmodal:PropTypes.func,
}
