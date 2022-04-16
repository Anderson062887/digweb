import {Route,Redirect} from "react-router-dom";
import {Consumer}from "../component/context/context";



export const PrivedRoute =({component:Component,...rest})=>{
   
    return(
        <Consumer>
            {({user})=>{
  
             return <Route {...rest} render={(props)=> {
            
                  return  user !== null? <Component  {...props}/> :<Redirect to={{pathname:"/login",state:{from:props.location}}} />;

             }}/>
            }}

        </Consumer>
    )
    
}