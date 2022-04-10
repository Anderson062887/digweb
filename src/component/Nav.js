import { AiOutlineUser,AiOutlineMenu} from "react-icons/ai";


//AiOutlineUser
import {NavLink} from "react-router-dom";
import {Consumer} from "../component/context/context";
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
                     {/* <li><NavLink to="/">🏠 Home</NavLink></li> */}
                     {/* <li><NavLink to="/microorganisms"> 🦠 Microorganisms</NavLink></li> */}
                     {/* <li><NavLink to="/personalhealth"> 👩🏻‍🍳 Personal </NavLink></li> */}
                     <li>{user.name}</li> 
                     <li> <AiOutlineUser size={28}/></li> 
                 </ul>
            </nav> 
            
            :
            <nav>
            <ul>
                <li><NavLink to="/">🏠 Home</NavLink></li>
                <li><NavLink to="/login"> 👉🏻Login</NavLink></li>
                <li><NavLink to="/register"> 👉🏻register</NavLink></li>
            </ul>
       </nav> }
            {/* <nav>
                 <ul>
                     <li><NavLink to="/">🏠 Home</NavLink></li>
                     <li><NavLink to="/microorganisms"> 🦠 Microorganisms</NavLink></li>
                     <li><NavLink to="/personalhealth"> 👩🏻‍🍳 Personal </NavLink></li>
                     <li><NavLink to="/tools"> 🧰 tools </NavLink></li>
                     <li><NavLink to="/login"> 👉🏻Login</NavLink></li>
                     <li><NavLink to="/register"> 👉🏻register</NavLink></li>
                 </ul>
            </nav> */}
        </header>
    </div>)
    }}

</Consumer>)

