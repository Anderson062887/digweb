import React from "react";
import {DragaboRiciver,DragaboItem} from "./Dragabo";
import PropTypes from "prop-types";
class TestControl extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            choosenAnswer:"",
            pregunta:this.props.pregunta,
            clearChildDragable:null,
        }
        this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
        this.next = this.next.bind(this);
       
    }


//this received the selected answer and a fn that will clear the state of child component
    handleSelectAnswer(answer,clearChild){
      
        this.setState((prevState)=>{
            return{
                ...prevState,
                choosenAnswer:answer,
                clearChildDragable:clearChild,
            }
        })
    
    }


    next(){
        
        const {choosenAnswer} = this.state;
         const [answer ] = this.props.answers.filter((q)=> q.answer === choosenAnswer)
        this.props.handleNextQuestion(answer);
        this.state.clearChildDragable()
        this.setState({
            choosenAnswer:"",
            pregunta:"",
            clearChildDragable:null,
        })
       
    }

    render(){
        const {choosenAnswer} =  this.state;
        return(
             <div className="wrap">
                        
                              <div className="box">   
                                <div className="col col-left">
                                 {/* <h3>posible answers</h3> */}
                                     {this.props.answers.map((p,j)=> {
                                     return <div key={j}>
                                     <DragaboItem  answer={p.answer}/>
                                     </div>
                                        })}
                               </div>

                               <div className="col display-element-side-to-side col-right">
                                      
                                        { <DragaboRiciver setAnswer={this.handleSelectAnswer} />}
                                        <h2>{this.props.pregunta}</h2>
                                    </div>

                               </div>
                               
                               {choosenAnswer !== ""?<button onClick={()=>this.next()}>next</button>:null} 

                </div>
        )
    }
}

TestControl.propTypes= {
    pregunta:PropTypes.string,
    answers:PropTypes.array,
    handleNextQuestion:PropTypes.func,
} 
export default TestControl;