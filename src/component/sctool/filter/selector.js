import React from "react";
import { BsChevronRight} from "react-icons/bs";
class SelectionDiv extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // selected:"",
            active:false,
        }
      
       this.handleChange = this.handleChange.bind(this); 
       this.handleClick = this.handleClick.bind(this)
    }

    // componentDidMount(){
    //     this.setState({selected:this.props.selected})
    // }
    handleChange({target}){
        const {name} = this.props;
        const value = target.textContent;
         this.props.handle(name,value)
    }
    // handleElement(e){
    //     this.setState({selected:e,active:false})
    // }

    handleClick(){
        this.setState(prevState =>({active:!prevState.active}))
    }

    render(){
        const{active} = this.state;

    return(

     <div className="selection-single-box">

         <div className="selection-box-parent">
                      <h3>{this.props.name}</h3>
            <div className="input-box">
                <p className="input-display">{this.props.selected}</p>
                <p className={active === true? "input-icon rotate-down":"input-icon rotate-up"} onClick={this.handleClick} ><BsChevronRight color={"#ea4c89"} size={20}/></p>
           </div>

             <div className={active === false? "select-wrapper selection-box-div":"select-wrapper display-visible-div"}>
               {this.props.fields.map( (o,i)=> <p onClick={this.handleChange} key={i}>{o}</p>)}
             </div>

        </div>                 
     </div>
    )
    }
}
export default SelectionDiv;