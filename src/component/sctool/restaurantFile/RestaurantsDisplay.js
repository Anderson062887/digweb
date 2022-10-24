import {useState,useEffect} from "react";
import {getRestaurant} from "../../../util/restaurantApi/restaurantApi";
import {RestaurantCart} from "./restaurantCard";
import "./restaurantCard.css";
import "./restaurantDisplayMain.css"
import {RestaurantFilter} from "./restaurantFilter"

export const Restaurant = (props)=>{
   
    const [list,setList] = useState([])
    const [res,setRes] = useState([]);
    const [display,setDisplay] = useState(list);
    const [seletAll,SetSelectAll] = useState(true)

    useEffect(()=>{
                const resList = async()=>{
                    try {
                        const result = await getRestaurant();
                        const names = result.map( n => n.name)
                        setList([...result])  
                        setRes(names)     
                    } catch (error) {
                        console.log(error)
                    }
                }
        resList()  
    },[])

  const handleAddRestaurantCriteria =(name)=>{
      setRes([...res,name]) 
  }

  const handleRemoveRestaurantCriteria =(name)=>{
   const names = res.filter( n => n !== name)
            setRes(names)
  }
  const handleSelectAll = ()=>{  
    if(!seletAll){
         const names = list.map( n => n.name)
         setRes(names)
    }else{
        setRes([])      
    }
    SetSelectAll(!seletAll)
  }

  useEffect(()=>{
    const resultado =  res.reduce((a,n)=>[ ...a,...list.filter(r => r.name === n)],[])
    resultado.sort((a,b)=>{ 
        return a.name > b.name?1:-1;
    })
        setDisplay(resultado) ;   
  },[res])

    return(
        <div className="page-wrapper">
            <div className="control-container">
            <RestaurantFilter  
            list={list} handleAdd={handleAddRestaurantCriteria}  
            handleRemove={handleRemoveRestaurantCriteria}
            handleSelectAll={handleSelectAll}
            seletAll={seletAll}/> 
         
            </div>
          
        <div className="card-container">
             
            {
          display.length > 0?  display.map( restaurant => <RestaurantCart key={restaurant._id} restaurant={restaurant} />):
          <p>No restaurant is selected, Please select the restaurant tha you want to see.</p>
            } 
        </div>
        </div>
    )
}