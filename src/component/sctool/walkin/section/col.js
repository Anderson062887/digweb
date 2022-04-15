import Spot from "../spot";

const Col = ({locs,cls,handleOccupied,handleSelect,idx})=>{
    
    return(
        <div className={cls}>
          
   {locs.map((loc,i)=><Spot key={loc.locId}  data={loc.current} history={loc.spaceHistory} num={i} id={loc.locId} idx={idx} handleSelect={handleSelect} handleOccupied={handleOccupied}/> )}
     
      </div>
    )
}
export  default Col;