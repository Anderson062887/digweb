import "./restaurantCard.css";
import {FcShop} from "react-icons/fc"
export  const RestaurantCart = ({restaurant})=>(
   <div className="resCard">
        <span className="restaurant-logo"><FcShop size={44}/></span>
        <div className="resCardInfo">
        
             <h3>Restaurant :</h3>
             <p>{restaurant.name}</p>
        </div>
        <div className="resCardInfo">
            <h3>Address:</h3> 
            <p>{restaurant.address}</p> 
        </div>
        <div className="resCardInfo">
             <h3>Phone:</h3>
             <p>{restaurant.phone?restaurant.phone:"000-000-0000"}</p>
        </div>
        <div className="resCardInfo">
             <h3>Email:</h3>
             <p>{restaurant.email?restaurant.email:"000-000-0000 no phone informacion on this restaurant"}</p>
        </div>

    </div>
)