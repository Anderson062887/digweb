import React,{useState} from "react"
import { BsChevronRight} from "react-icons/bs";
import "./linkcontainer.css";
export const LinkBox =({title,children,icon})=>{
    const [active,setActive] = useState(false);


    return(
        <div className="link-box">
            <div className="link-btn" onClick={e => setActive(!active)}>
               <span className="btn-icon">{icon}</span>
               <h4>{title}</h4>
               <span className={active === true?"rotate-icon arrow":"icon arrow"}><BsChevronRight color={"#ea4c89"} size={20}/></span>
            </div>
            <div className={active === true? "subnav display-visible":"subnav display-none"}>
               {children}
            </div>
            
        </div>
    )
}