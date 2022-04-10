import React from "react";
import { LogIn } from "../util/userApi";
import{Link} from "react-router-dom";
import "./entry.css";
import {EmailValidate,checkpassword} from "../util/utils";



class Login extends React.Component{
    constructor(props){
        
        super(props);
        this.state = {
            email:"",
            password:"",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
      e.preventDefault();
      const{email,password} = this.state;
      const mailValid = EmailValidate(email);
      const pasValid = checkpassword(password)
      
     if(mailValid && pasValid){
         LogIn({email,password})
         .then(token =>{ 
             console.log(token)
             if(token.user === true){
                this.props.setuser({user:token.token,name:token.name})
                this.props.history.push("/")
             }
             
         })
         .catch(e => console.log(e))
     }
     
       
      this.setState({
        email:"",
        password:"",
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
        
        const {email,password} = this.state;
        return(
            <div className="entry-page">
            
                <div className="form-wrapper">
              
                        <form onSubmit={this.handleSubmit}> 
                        
                        <div className="form-header">
                        <h2>Login</h2>
                        <small>login to see usefull supply center information</small>
                         </div>
                          
                                <div className="input-field">
                                <label htmlFor="email" >Email</label>
                                    <input name="email" id="email" type="text"  value={email} onChange={this.handleChange}/>
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password" >Password</label>
                                    <input  name="password" id="password" type="password"  value={password} onChange={this.handleChange}/>
                                </div>
                                
                                <button onClick={this.handleSubmit} className="form-sub">Login</button>
                                <small>if you don't have a account go to <strong><Link to="/register">register</Link></strong></small>
                            </form> 

                 </div>

                 <div className="login-decor-image">
                  
                 </div>


            </div>
        )
    }
}

export default Login;

