import {useReducer,useState,useEffect} from "react";
import "./resFilter.css";
import { BsChevronRight,BsCheck2} from "react-icons/bs";


const ListElement = ({txt,handleAdd,handleRemove,defaultSelect})=>{
   
    const [select,setSelect] = useState(defaultSelect)
  
const HandleClick = ()=>{ 
    select === false? handleAdd(txt):handleRemove(txt);
    setSelect(!select)
}

useEffect(()=>{
setSelect(defaultSelect)
},[defaultSelect])

    return(
        <li  className="list-select" onClick={HandleClick}>{txt}  {select === true && <span>{<BsCheck2 size={20}/>}</span>}</li>
    )
}


 export const RestaurantFilter = (props)=>{
  const [open,setOpen] = useReducer(open => !open,false)
 
    return(
        <div className="filter-box">
            
                <div className="filter-control" > 
                <p>Stores {props.list.length}</p>
                    <span onClick={setOpen}  > 
                        <BsChevronRight 
                        color={"#ea4c89"} 
                        size={28} 
                        className={open === true?"rotate-icon arrow":"icon arrow"}/>
                    </span>  

                    <div className="res-select-wrapper">
                            <ul className={ open?"res-display-visible-div":"res-selection-box-div"}>
                                <div  className="select-btn">
                                <button onClick={props.handleSelectAll} style={{color:"black"}}> Stores</button>  
                                <span>{props.seletAll && <BsCheck2 size={20}/> }</span>
                                </div>
                                
                                {props.list.map(r => <ListElement defaultSelect={props.seletAll} handleAdd={props.handleAdd} handleRemove={props.handleRemove} key={r.name} txt={r.name}/> ) }
                            </ul>
                    </div>

                </div> 
          
           

        </div>
    )
}