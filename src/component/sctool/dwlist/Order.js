import React from "react";
import {getOrderFile} from "../../../util/api";
import Loader from "../../Loader/loader";
import Filter from "../filter/filter";
import{ ListDisplay }from "./ListUiDisplay"
class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orders:[]
        }
   
    }

    componentDidMount(){ 
        const {filename} = this.props.match.params;
         getOrderFile(filename).then( file => {
             this.setState({orders:[...file]})
         }).catch( e => console.log(e))
    }

    render(){
    const {orders} = this.state;
    
        return(
            <div className="list-wrap">
                          <div className="description">
                              <h2>Order</h2>
                              <p>This all order items in the selected order</p>
                          </div>

                               {orders.length <= 0 ? <Loader />:
            <Filter orders={orders} render={(list)=> <ListDisplay list={list}/>}/>}

             </div>)

    }
}

export default Order;