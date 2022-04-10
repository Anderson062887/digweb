import React from "react";
import App from "../../App";

const {Provider,Consumer} = React.createContext();

class Context extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:null,
        }

        this.setUser = this.setUser.bind(this);
    }

    setUser(user){
        this.setState((prev)=>{
            return{
                user:user,
            }
        })
    }
    render(){
        return(
        <Provider value={{user:this.state.user, setUser:this.setUser}}>
            {this.props.children}
        </Provider>
        );
    }
}

export default Context;
export {Consumer}