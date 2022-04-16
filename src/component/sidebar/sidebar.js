import {LinkBox }from "./Linkcontainer";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import "./sidebar.css"

export const Sidebar =(props)=>{
    const [visible,setVisible] = useState("");
    // console.log(props)
    const setCurrentVisable = (title)=>{
        setVisible(title)
    }

    return(
        <div className={props.show === true?"sidebar ani":"sidebar"}>
            <div>
          <h2>Supply Center</h2>
          <small>by Dig</small>
          </div>
            <nav>
            <LinkBox title="Home" icon={"🏠"}  setCurrentVisable ={setCurrentVisable}  visible={visible}>
                    <NavLink to="/" exact >Home</NavLink>  
             </LinkBox>
              <LinkBox title="microorganisms" icon={"🦠"} setCurrentVisable ={setCurrentVisable}  visible={visible}>
               {/* <NavLink to="/microorganisms"> Microorganisms</NavLink> */}
                    <NavLink to="/microorganisms/bacterias">Bacterias</NavLink>
                    <NavLink to="/microorganisms/virus">Virus</NavLink>
                    <NavLink to="/microorganisms/parasites">Parasites</NavLink>
             </LinkBox>
              <LinkBox title="SC tool" icon={"🧰"} setCurrentVisable ={setCurrentVisable}  visible={visible}>
                    <NavLink  to="/tools/walkin">walk-in </NavLink>

                      <LinkBox title="Restaurant Action" icon={"🥗"} setCurrentVisable ={setCurrentVisable}  visible={visible}> 
                         <NavLink exact to="/tools/restaurants">Restaurants</NavLink>
                         <NavLink  to="/tools/restaurants/add">Add Restaurant</NavLink>
                       </LinkBox>
                    <LinkBox title="SC List Action " icon={"🗂"} setCurrentVisable ={setCurrentVisable}  visible={visible}>
                        <NavLink exact to="/list">List downloaded</NavLink>
                        <NavLink to="/list/upload">add List</NavLink>
                    </LinkBox>
             </LinkBox>

            </nav>
             
            
        </div>
    )
}