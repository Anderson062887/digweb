import React,{useState} from "react";
// import Walkin from "../walkin/walk";
import Walkin from "./walkin/walk";
import {Restaurant} from "../sctool/restaurantFile/RestaurantsDisplay";
import {NewRestaurantForm} from "../sctool/restaurantFile/AddRestaurant"
import {Route}from "react-router-dom";
import "./tool.css";



const Info =(props)=>{
   const [inf,setInf] = useState("")

   const handleSumit = (e)=>{
       
   e.preventDefault();
         props.history.push("/tools")
         setInf("")
        e.target.reset()
   }
   const handleChange = ({target})=>{
    setInf(target.value)
   }
    return(
        <form onSubmit={handleSumit}>
            <input type="text" value={inf} onChange={handleChange}/>
            <button>add info</button>
        </form>
    )
}

const Tool = ({match})=>{

    return(

        <div>
          
          <Route  exact path={`${match.path}/walkin`} component={Walkin} />
          <Route  exact path={`${match.path}/restaurants`} component={Restaurant} />
          <Route  exact path={`${match.path}/restaurants/add`} component={NewRestaurantForm} />
            
        </div>
    )
}
export  default Tool;