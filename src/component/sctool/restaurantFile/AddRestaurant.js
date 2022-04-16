import {useState} from "react"
import "./addRestaurant.css";
import {createRestaurant} from "../../../util/restaurantApi/restaurantApi"

export const NewRestaurantForm = ()=>{

    const state = {
        number:"",
        address:"",
        phone:"",
        email:"",
    }

    const [info,setInfo] = useState(state)

    const handleChange = ({target})=>{
         const {name,value} = target;
        setInfo({
            ...info,
            [name]:value,
        })
    }

    const handleSubmit = async(e)=>{
       e.preventDefault();
            if(info.number && info.address){
                const data = await createRestaurant(info)
                console.log(data);
            }
            
        setInfo(state)
    }

    return(
        <div className="add-form-wrapper" >

            <form className="form" onSubmit={e => handleSubmit(e)}>
                <h2>Add new Restaurant</h2>
                <div>
                     <label>Restaurant Number</label>
                     <input type="text" value={info.number}  name="number" onChange={e => handleChange(e)}/>
                </div>
                 <div>
                     <label>Address</label>
                     <input type="text" value={info.address} name="address" onChange={e => handleChange(e)} />
                </div>
                <div>
                     <label>Phone</label>
                     <input type="text" value={info.phone} name="phone" onChange={e => handleChange(e)} />
                </div>
                <div>
                     <label>Email</label>
                     <input type="mail"  value={info.email}  name="email" onChange={e => handleChange(e)}/>
                </div> 
                     <div>
                         <button className="form-sub">Add</button>
                     </div>
                    
            </form>

        </div>
    )
}