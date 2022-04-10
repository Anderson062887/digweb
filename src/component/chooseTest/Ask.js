import React,{Component} from "react";
class Ask extends Component{
    constructor(props){
        super(props);
        this.state = {
            select: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange({target}){
      this.setState({select:target.value})
    }
    handleSubmit(e){
       e.preventDefault();
         const {select} = this.state;
         const[ answer ]= this.props.respuesta.filter((p)=> p.answer === select);
        
         if(answer){
            this.props.handleSelect(answer)
         }
        e.target.reset();
       this.setState({select:null})
    
    }


    render(){
        const {pregunta,respuesta} = this.props;
        const {select} = this.state;
        return(
            
            <form onSubmit={ this.handleSubmit}>
                <h1 className="pad-mid align-left">{pregunta}</h1>
               {respuesta.map((p,i)=> <div key={i} className="pad-mid align-left"><input onClick={this.handleChange} type="radio" value={p.answer} name="pregunta" />  <label htmlFor={i}>{p.answer}</label></div>)}
               <div className="pad-mid align-left"> <button type="submit" className={select !== null?"btn background-primary":"btn"} >Next</button></div>
            </form>
        )
    }
}
export default Ask;