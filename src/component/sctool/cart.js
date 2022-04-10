import "./cart.css"
export const Cart = ({id,name,date,time})=>{
    return(
        <div className="cart">
        <span>ID:{id}</span>
         <h2> Name: {name}</h2> 
         <span> Date:{date}</span> 
         <span> Time: {time}</span> 
        </div>
    )
}