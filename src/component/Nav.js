import { AiOutlineUser,AiOutlineMenu} from "react-icons/ai";


//AiOutlineUser
import {NavLink} from "react-router-dom";
import {Consumer} from "../component/context/context";
import {Logout} from "./../user/Logout.js";
export const Nav =({hideNav})=>(<Consumer>

    {({user})=>{
    // console.log(user)
       return(
        <div className="navbar">
        <header>
     
            <h2 onClick={x => hideNav()}><AiOutlineMenu /></h2>
            {user !== null? 
                     <nav>
                    
                 <ul>
                     {/* <li><NavLink to="/">๐  Home</NavLink></li> */}
                     {/* <li><NavLink to="/microorganisms"> ๐ฆ  Microorganisms</NavLink></li> */}
                     {/* <li><NavLink to="/personalhealth"> ๐ฉ๐ปโ๐ณ Personal </NavLink></li> */}
                    <li>   <Logout />   </li>
                     <li>{user.name}</li> 
                     <li> <AiOutlineUser size={28}/></li> 
                 </ul>
            </nav> 
            
            :
            <nav>
            <ul>
                <li><NavLink to="/">๐  Home</NavLink></li>
                <li><NavLink to="/login"> ๐๐ปLogin</NavLink></li>
                <li><NavLink to="/register"> ๐๐ปregister</NavLink></li>
            </ul>
       </nav> }
            {/* <nav>
                 <ul>
                     <li><NavLink to="/">๐  Home</NavLink></li>
                     <li><NavLink to="/microorganisms"> ๐ฆ  Microorganisms</NavLink></li>
                     <li><NavLink to="/personalhealth"> ๐ฉ๐ปโ๐ณ Personal </NavLink></li>
                     <li><NavLink to="/tools"> ๐งฐ tools </NavLink></li>
                     <li><NavLink to="/login"> ๐๐ปLogin</NavLink></li>
                     <li><NavLink to="/register"> ๐๐ปregister</NavLink></li>
                 </ul>
            </nav> */}
        </header>
    </div>)
    }}

</Consumer>)

