import React from "react"
class  DragaboRiciver extends React.Component{
constructor(props){
    super(props)
    this.state = {
        txt:"",
        cls:false,
    }

this.handleDragOver = this.handleDragOver.bind(this);
this.handleDrop = this.handleDrop.bind(this);
this.clear = this.clear.bind(this)

}
clear(){
    this.setState({txt:"",cls:false})
}

 handleDrop(e){
     e.preventDefault();
     const{ txt }= this.state;
    e.dataTransfer.dropEffect = "move";
    const data = e.dataTransfer.getData("text/plain")
    if(txt === ""|| txt !== data){
       this.props.setAnswer(data,this.clear);
       this.setState({txt:data,cls:true})
       
    }   
  }

   handleDragOver(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
   }
 
   
   render(){
const {txt,cls} = this.state;
   return(
       <div className={cls === true?"dragComplete dragable":"dragable"} id="target"
      onDragOver={(e)=> this.handleDragOver(e)} 
      onDrop={(e)=>this.handleDrop(e)}  >
           <p>{txt}</p>
       </div>)
    }
}
////////////////////////////////////////////


const DragaboItem = ({answer})=>{
   
    // const [texto,setTexto] = useState(answer);

    const handleDragEnd = (e)=>{
        e.preventDefault();
        //  select();
     }
    const handleDragStart = (e)=>{
        e.dataTransfer.setData("text/plain",answer)      
    }
    return(
        <div id="item" 
        draggable="true" 
        className="dragable"
        onDragStart={(e)=>handleDragStart(e)}
        onDragEnd={(e)=>handleDragEnd(e)} >{answer}</div>
    )
}

export {DragaboRiciver,DragaboItem}