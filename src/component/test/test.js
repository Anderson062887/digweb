import React from "react";
import TestControl from "./testControl";
import PropTypes from 'prop-types';




class Test extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:props.data || [],
            answers:[],
        }

        this.handleSelect = this.handleSelect.bind(this)
       this.handleSelectAnswer = this.handleNext.bind(this)
       this.handleNext = this.handleNext.bind(this)
    }



    handleSelect(){
        this.setState((prevState)=>{
            return{
                ...prevState,
                select:!prevState.select,
            }
        })
    }
    
    handleSelectAnswer(answer){
        this.setState((prevState)=>{
            return{
                ...prevState,
                answers:[...prevState.answers, answer],
            }
        })
    }
    handleNext(answer){
        
        this.setState((prevState)=>{
          
            return{
                ...prevState,
                answers:[...prevState.answers, answer],

            }
        })
      
    }

    render(){
           const idx = this.state.answers.length; 
           const length = this.state.data.length - 1; 
       
            if(idx <= length){
                const question = this.state.data[idx];
                const {pregunta,respuesta} = question;
               return <TestControl pregunta={pregunta} answers={respuesta} handleNextQuestion={this.handleNext}/>
                   
            }else{
                  if (idx === length + 1) {
                const score = (this.state.answers.filter((q)=> q.valid === true).length / (length + 1) ) * 100;
                return <h1>your score is %{Math.round(score)}</h1>
                  }else{
                    return <h1>No questions</h1>
                  }
               
            }
      
           
        
            
    }
}

export default Test;

Test.propTypes = {
    data:PropTypes.array,
}