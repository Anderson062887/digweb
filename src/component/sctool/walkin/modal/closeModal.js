import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";

export const CloseModal = ({clearmodal,editing,date})=>(
    // console.log(new Date(date))||
    <div className="closeModal">
   {editing === true?
    <h3>Edit mode active</h3>: 
    date !== undefined && <span> Created on: {new Date(date).toLocaleDateString()}</span> }

   <span onClick={clearmodal}
    style={{backgroundColor:"transparent",
    color:"white",
     border:"none",
     cursor:"pointer"}}><AiFillCloseCircle size={30}  color={"rgb(132, 130, 130)"}></AiFillCloseCircle></span>
   </div>
)

CloseModal.propTypes = {
    date:PropTypes.string,
    editing:PropTypes.bool,
    clearmodal:PropTypes.func,
}
