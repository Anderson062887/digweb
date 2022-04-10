import PropTypes from "prop-types";
import "./history.css";
const LocationHistory = ({history})=>{
  
    return(
        <div className="history-wrap">
        
            <div className="history-box">
                <h2> Location History</h2>
                <div><h4>Name</h4><h4>Quantity</h4> <h4>Date</h4></div>
            </div>
              <div  className="history-box-li-wrap">

                 
                  {history.map((i,x)=><div key={x} className="history-li"> <p>{i.name}</p> <p>{i.quantity}</p> <p>{new Date(i.date).toLocaleDateString()}</p> </div>)}
                  
              </div>
        </div>
    )
}

LocationHistory.propTypes = {
    history:PropTypes.array,
}
export default LocationHistory;