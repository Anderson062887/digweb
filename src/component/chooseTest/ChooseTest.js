import React,{Component} from "react";
import { FecthData} from "../../util/api";
import Ask from "./Ask";
import Loader from "../Loader/loader";
import "./test.css"




const SubHeader = ({txt})=>(
    <div className="box-header">
        <h4>{txt}</h4>
    </div>
)

const QuestionCounter = ({idx,total,msg})=>(
    <div className="pad-mid align-left text-color-gray">
        <p>{idx} of {total} {msg}</p>
    </div>
)
// //////

// ////

class ChooseTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:null,
            chosenAnswer:null,
            answers:[],
            idx:0,
        }
       
        this.handleSelect = this.handleSelect.bind(this)
        // this.handleAnswer = this.handleAnswer.bind(this)
        this.handleReset = this.handleReset.bind(this);
    }

    componentDidMount(){
        const [,,params] = this.props.match.url.split("/")
          FecthData(params)
          .then( d => this.setState((prevState)=>({...prevState,data:[...d]}) ))
          .catch( e => console.log(e));
    }
    handleSelect(select){

       this.setState(prevState =>({...prevState,idx:prevState.idx+= 1,answers:[...prevState.answers,select] }))
  
    }
    // handleAnswer(){
    // this.setState( (prevState)=>({...prevState, idx:prevState.idx+= 1,chosenAnswer:null ,answers:[...prevState.answers, prevState.chosenAnswer]}))
    // }
    handleReset(){
        this.setState({
            chosenAnswer:null,
            answers:[],
            idx:0,

        })
    }

    render(){
        console.log("rendering")
        const {data,idx,answers} = this.state;
        if(!data){return <Loader /> }
      
        const length = data.length;
        if(idx <= length -1){
                const {pregunta,respuesta} = data[idx];
                return(
                    <div className="container">
                        <SubHeader txt={"Please answer the question to complete the test, press next once you have select the answer."}/>
                         <QuestionCounter idx={idx + 1} total={data.length} msg={"questions"} />
                        <Ask  pregunta={pregunta} respuesta={respuesta} handleSelect={this.handleSelect}/>
                    </div> )
              }else{
                const numberOfCorrectAnswers = answers.filter((q)=> q.valid === true).length;
                const score = (numberOfCorrectAnswers  / length  ) * 100;
                return(<div className="container">
                    <SubHeader  txt={"Thank you for completing the test"}/>
                    <QuestionCounter idx={numberOfCorrectAnswers} total={data.length} msg={"questions were correct!"} />
                    <h1 className="pad-mid align-left">Your score is % {Math.round(score)}</h1>
                </div>)
            }
        }
        
       
         

}
export default ChooseTest;
