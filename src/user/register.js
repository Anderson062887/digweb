import React from "react";
import{Link} from "react-router-dom";
import "./entry.css";
import "./forms.css";
import {ConfirmedPassword,NameValidator} from "../util/utils";
import  {RegisterUser } from "../util/userApi";
import {Warning} from "../component/warning";

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            last:"",
            email:"",
            password:"",
            confirmedPassword:"",
            message:null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
      e.preventDefault();
    
      const{name,last,password,confirmedPassword,email} = this.state;
        NameValidator(name)
       ConfirmedPassword(password,confirmedPassword)
       
       RegisterUser({name,last,password,email})
       .then( res => {
           res.user === true?this.props.history.push("/login"):
           this.setState({message:res})   
        })
       .catch( e => console.log(e))
    
    
    //    setTimeout(()=> {
    //     this.setState({
    //         name:"",
    //         last:"",
    //         email:"",
    //         password:"",
    //         confirmedPassword:"",
    //         message:null,
    //     },)
    //    },2000)
       
      this.setState({
        name:"",
        last:"",
        email:"",
        password:"",
        confirmedPassword:"",
        message:null,
    })
      
    }
    handleChange({target}){
        const {name,value} = target;
         this.setState((prev)=>{
             return{
                 ...prev,
                 [name]:value,
             }
         })
    }

    render(){
        const {name,last,email,password,confirmedPassword,message} = this.state;
    
        return(
            <div className="entry-page">
            
                <div className="form-wrapper">
              
                        <form onSubmit={this.handleSubmit}> 
                        <div className="form-header">
                        <h2>Register</h2>
                        <small>register to gain access to the supply center information</small>
                         </div>
                           
                                <div className="input-field">
                                    <label htmlFor="name" >Name</label>
                                    <input  name="name" id="name" type="text"  value={name} onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="last" >Last</label>
                                    <input  name="last" id="last" type="text"  value={last} onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                <label htmlFor="email" >Email</label>
                                    <input name="email" id="email" type="text"  value={email} onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password" >Password</label>
                                    <input  name="password" id="password" type="password"  value={password} onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="confirmedPassword" >Confirm Password</label>
                                    <input  name="confirmedPassword" id="confirmedPassword" type="password"  value={confirmedPassword} onChange={this.handleChange}/>
                                </div>
                                
                                <button onClick={this.handleSubmit} className='form-sub'>Register</button>
                                <small>if you have a account go to <strong><Link to="/login">Login</Link></strong></small>
                            </form> 

                 </div>

                 <div className="register-decor-image">
                   {message !== null && <Warning message={message.message}/>}
                     
                  
                 </div>


            </div>
        )
    }
}

export default Register;