import  {useState,useEffect} from "react"
export const Warning = (props) =>{
    
    return(
    <small className={ props.show === true?"errorShow":"errorHide"}>{props.message}</small>
    )
}