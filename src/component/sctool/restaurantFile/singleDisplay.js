import React from "react";
import {GetOneRestaurant} from "../../../util/restaurantApi/restaurantApi.js"; 
import Loader from "../../Loader/loader"

class SingleRestaurantDisplay extends React.Component{
    constructor(props){
       // take id pass via params
       //fetch by restaurant id the info from db on componentDidMount
        super(props)
        this.state = {
            loading:true,
            restaurant:{
                name:"",
                address:"",
                phone:"",
                email:""
            }
        }
    }

   async  componentDidMount(){
       try {
        const {id} = this.props.match.params;
        const {restaurant}= await GetOneRestaurant(id);
         this.setState((prevState)=>{
               return{
                   loading:false,
                   restaurant:{...restaurant}
               }
         })
       } catch (error) {
           console.log(error)
       }
  
    }


    render(){
        const {loading} = this.state;
        const {phone,name,email,address} = this.state.restaurant;
        if(loading){
            return <Loader />
        }
        
        return(

            ///style this component, this component show all data of restauarant
            <div>

        
              <button  style={{backgroundColor:"blue"}} onClick={()=>this.props.moveback()}>go back</button>
              

                <div className="resCardInfo">
                    <h3>Name:</h3> 
                    <p>{name}</p> 
                </div>

             <div className="resCardInfo">
                    <h3>Address:</h3> 
                    <p>{address}</p> 
            </div>
        <div className="resCardInfo">
             <h3>Phone:</h3>
             <p>{phone?phone:"000-000-0000"}</p>
        </div>
        <div className="resCardInfo">
             <h3>Email:</h3>
             <p>{email?email:"000-000-0000 no phone informacion on this restaurant"}</p>
        </div>

            </div>
        )
    }
}
export default SingleRestaurantDisplay;