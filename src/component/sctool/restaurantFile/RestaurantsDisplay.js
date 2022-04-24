import {useState,useEffect} from "react";
import {getRestaurant} from "../../../util/restaurantApi/restaurantApi";
import {RestaurantCart} from "./restaurantCard";
import "./restaurantCard.css";

export const Restaurant = ()=>{
    const [list,setList] = useState([])
    useEffect(()=>{
                const resList = async()=>{
                    try {
                        const result = await getRestaurant();
                        setList([...result])
                    } catch (error) {
                        console.log(error)
                    }
                }
        resList()
       
    },[])
 
    return(
        <div className="card-container">
             
            {list.map( restaurant => <RestaurantCart key={restaurant._id} restaurant={restaurant} />)} 
        </div>
    )
}