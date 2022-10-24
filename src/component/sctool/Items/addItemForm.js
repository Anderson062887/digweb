import React from "react";
import {GoPlusSmall}from "react-icons/go";
import {CreateNewItem} from "../../../util/restaurantApi/itemsApi";
import "./addItem.css";
// import {RestaurantFilter} from "../restaurantFile/restaurantFilter";
// import { BsChevronRight,BsCheck2} from "react-icons/bs";

class Itemsform extends React.Component{
    constructor(props){
       
        super(props);
        this.state = {
            name:"",
            category:"",
            image:"",
            description:"",
            pack_size:"",
            pack_Type:"",
            pack_unit:"",
           
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange({target}){
       
        const {name,value} = target;
        this.setState((prevState)=>{
            return{
               ...prevState,
               [name]:value,
            }
        })
    }

    handleList(e){
        // const {name,outerText} = e.target;
        // console.log(e)

    }

   async handleSubmit(e){
        e.preventDefault()
        //this getitems has to be changed to a post items
     
        const {user} = this.props;
    await CreateNewItem({...this.state,user}); 
      
        this.setState({
            name:"",
            category:"",
            image:"",
            description:"",
            pack_size:"",
            pack_Type:"",
            pack_unit:"",

        })
    }

    render(){
        const {name,category,image,description,pack_Type,pack_size,pack_unit} = this.state;
   
        return(
           <div className="createItem-form-wrapper">
            <form onSubmit={this.handleSubmit} className="createItem-form">
           
             <div className="form-section">
 
                        <div className="createItem-input-field">
                            <label htmlFor="name"> Name</label>
                            <input type="text" placeholder="Name" name="name" value={name} onChange={this.handleChange}/>
                        </div>

                            <div className="createItem-input-field">
                            <label htmlFor="category"> Category</label>    
                               
                                <select name="category" onChange={this.handleChange} value={category}>
                                        <option value="">--Please choose an option--</option>
                                        <option value="delete">delete</option>
                                        <option value="process_veg">process_veg</option>
                                        <option value="sauces">sauces</option>
                                        <option value="veggie">veggie</option>
                                        <option value="repack">repack</option>
                                        
                                    </select>
                                  
                              </div>
                </div> 

                <div className="createItem-input-field">
                    <label htmlFor="image"> Image</label>
                    <input type="text" placeholder="image" name="image" value={image} onChange={this.handleChange}/>
                </div>

{/* ////////////////////////////////// */}
        <div className="form-section-3-col">

                    <div className="createItem-input-field">
                        <label htmlFor="pack_Type"> Pack type</label>
                        {/* <input type="text" placeholder="pack type" name="pack_Type" value={pack_Type} onChange={this.handleChange}/> */}
                                    <select name="pack_Type" onChange={this.handleChange} value={pack_Type}>
                                        <option value="">--Please choose an option--</option>
                                        <option value="bag">bag</option>
                                        <option value="box">box</option>
                                        <option value="gal">bag</option>
                                        <option value="bucket">bucket</option>
                                    </select>
                    </div>


                    <div className="createItem-input-field">
                                <label htmlFor="pack_unit"> pack unit</label>     
                                <select name="pack_unit" onChange={this.handleChange} value={pack_unit}>
                                        <option value="">--Please choose an option--</option>
                                        <option value="LB">LB</option>
                                        <option value="KG">KG</option>
                                        <option value="GAL">GAL</option>    
                                    </select>  
                    </div>

                    <div className="createItem-input-field">
                        <label htmlFor="pack_size"> Pack size</label>
                        <input type="number" placeholder="pack size" name="pack_size" value={pack_size} onChange={this.handleChange}/>
                    </div>

             </div>  


 
{/* /////////////// */}
                <div className="createItem-input-field">
                    <label htmlFor="description"> Description</label>
                    {/* <input type="text" placeholder="image" name="image" value={image} onChange={this.handleChange}/> */}
                    <textarea name="description" value={description} onChange={this.handleChange}></textarea>
                </div>
                <button style={{backgroundColor:"royalblue", width:"200px"}}><GoPlusSmall /> Add Item</button>
            </form>
            </div>
        )
    }
}

export default Itemsform;