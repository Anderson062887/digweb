import React from "react";

class Loader extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:"Loading",
        }
        this.handleLoader = this.handleLoader.bind(this)
    }

    handleLoader(){
        this.handle = setInterval(() => {
        this.setState((prevState)=>{
            return {text:prevState.text !== "Loading..."?prevState.text += ".":"Loading"}
        })
        }, 300);

    }
    componentDidMount(){
        // this.setState({txt:this.props.text})
        this.handleLoader()
    }

    componentWillUnmount(){
        clearInterval(this.handle)
    }

    render(){
        const {text} = this.state;
        return(
            <h1>{text}</h1>
        )
    }
}
export default Loader;