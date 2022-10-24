import {LinkBox }from "./Linkcontainer";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import "./sidebar.css";
import {FaBacteria,FaViruses,FaWarehouse,FaListUl}from "react-icons/fa"
import {GiEarthWorm}from "react-icons/gi"
import {MdOutlineFastfood}from "react-icons/md"
import {GoPlusSmall}from "react-icons/go";
import{BsCardChecklist} from "react-icons/bs"







export const Sidebar =(props)=>{
    // const [visible,setVisible] = useState("");
  
    // const setCurrentVisable = (title)=>{
    //     // setVisible(title)
    //     console.log("props")
    // }

    return(
        
        <div className={props.show === true?"sidebar ani":"sidebar"}>
       
            <div>
          <h2>Supply Center</h2>
          <small>by Dig</small>
          </div>
            <nav>
            <LinkBox title="HOME" icon={"🏠"}>
                    <NavLink to="/" exact >Home</NavLink>  
                   
             </LinkBox>
              <LinkBox title="MICROORGANISMS" icon={"🦠"}>
               {/* <NavLink to="/microorganisms"> Microorganisms</NavLink> */}
                    <NavLink to="/microorganisms/bacterias"> <span><FaBacteria /></span>Bacterias</NavLink>
                    <NavLink to="/microorganisms/virus"> <span><FaViruses /></span> Virus</NavLink>
                    <NavLink to="/microorganisms/parasites"> <span><GiEarthWorm /></span>Parasites</NavLink>
             </LinkBox>
              <LinkBox title="TOOLS" icon={"🧰"}>
                    <NavLink  to="/tools/walkin"> <span><FaWarehouse /></span>walk-in </NavLink>
                    <NavLink exact to="/tools/checklist"> <span><BsCardChecklist/></span>Checklist</NavLink>
                    <NavLink  to="/tools/checklist/create"> <span><BsCardChecklist/></span>new task</NavLink>

                      <LinkBox title="Restaurant Action" icon={"🥗"}> 
                         <NavLink exact to="/tools/restaurants"> <span><MdOutlineFastfood /></span>Restaurants</NavLink>
                         <NavLink  to="/tools/restaurants/add"> <span><GoPlusSmall /></span> Add Restaurant</NavLink>
                       </LinkBox>
                    <LinkBox title="SC List Action " icon={"🗂"}>
                        <NavLink exact to="/list"> <span><FaListUl/></span>List downloaded</NavLink>
                        <NavLink to="/list/upload"> <span><GoPlusSmall /></span>  Add List</NavLink>
                        <NavLink to="/list/create/item"> <span><GoPlusSmall /></span>  Add Item</NavLink>
                    </LinkBox>
             </LinkBox>

            </nav>
             
            
        </div>
               
           
    )
}