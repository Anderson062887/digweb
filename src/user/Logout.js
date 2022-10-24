import {Consumer} from "../component/context/context";
import "./entry.css"
const Logout =()=>{

    return(
        
        <Consumer>
        {({setUser})=> <a href="/login" className={"btn-logout"} onClick={()=>setUser(null)}>Logout</a>}
        </Consumer>
    )
}
export {Logout};