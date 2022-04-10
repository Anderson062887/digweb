import React from "react";
import "./filter.css";
import{ ListDisplay } from "../dwlist/ListUiDisplay";
import listfilter from "./filterStrategy";
import SelectionDiv from "./selector";



class FilterStrategy{
     Category(list,category){
         if(category === "All"){
             return list;
         }
       return list.filter(order => order.Category === category);  
    }
     Restaurant(list,restaurant){
        if(restaurant === "All"){
            return list;
        }
        return  list.filter(order => order.Restaurant === restaurant);
    }

}

const strategy = new FilterStrategy();

class Filter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list: [],
            orderProps:[],
            filterCriteria:{
                Restaurant:"",
                Category:"",

            },
            
        }
       
        this.handleChange = this.handleChange.bind(this);
       
    }

  formatList(order){
   let copy = this.props.orders.slice();
    let sort = false;
    for (const key in order) {     

        if(order[key] !== "" && order[key] !== "All"){ 
            listfilter.setFilterStrategy(key)
            copy = listfilter.run(copy,order[key])  
            //   filterStrategy.setFilterStrategy(key);
            //  let x =  filterStrategy.run(copy,order[key]) 
            //   copy = copy.filter(o => o[key] === order[key])
              sort = true;
        }    
   
      }
        if(sort === true){
            return copy;
        }
        return false;

}

  handleChange(name,value){
        this.setState((prev)=>{
             const currentSeach = this.formatList({...prev.filterCriteria, [name]:value})
            return{
                ...prev,
                filterCriteria:{...prev.filterCriteria, [name]:value},
                list:currentSeach !== false?currentSeach:this.props.orders,
               
            }
        })

    }
    


    componentDidMount(){
        const [first] = this.props.orders;
        const OrderProperty = Object.keys(first)
        this.setState({list:this.props.orders,orderProps:OrderProperty})
    }
    getCategory(list,field){
        return list.map(c => c[field]).reduce((a,n)=>{
            if(!a.includes(n)){
              a = [...a,n];
            }
            return a;
          },[]).filter(c => c !== undefined);
    }

    
    render(){
         const {list,filterCriteria} = this.state;
        const{ orders} = this.props;
        const [first] = orders;
        const[Category,,,Restaurant] = Object.keys(first);
       
         const categorylist = this.getCategory(list,Category);
         const restaurantList = this.getCategory(list,Restaurant);
        return(
            <div>
                {categorylist.length > 0 && <div>
                <div className="selection-container">
        <SelectionDiv fields={["All",...categorylist]} 
                      name={Category}  
                      handle={this.handleChange} 
                      selected={filterCriteria.Category} />

         <SelectionDiv fields={["All",...restaurantList]} 
                      name={Restaurant} 
                      handle={this.handleChange} 
                      selected={filterCriteria.Restaurant} /> 

                 </div>
               
                  <ListDisplay list={list}/>
                </div>}
               

            </div>
        )
    }
}

export default Filter;