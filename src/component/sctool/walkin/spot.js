import React from "react";
import "./walk.css";
import {AddInfo }from "./addinfo/addInfo";
import {ModalInfo} from "./modal/modaInfo";
import { BsPencilSquare } from "react-icons/bs";
import { BsInfoCircle} from "react-icons/bs";
import {CreateItem,deleteItem,editItem} from "../../../util/api"




class Spot extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isEmpty:true,
            parentidx:props.idx,
            info:null,
           modalOpen:false,
           formActive:false,
           infoComponentActive:false,
        }
        this.handleEmpty = this.handleEmpty.bind(this);
        this.clearModal = this.clearModal.bind(this);
        this.handleAddForm = this.handleAddForm.bind(this);
        this.showForm = this.showForm.bind(this)
        this.showInfo = this.showInfo.bind(this);
        this.clearModalAndEdit = this.clearModalAndEdit.bind(this);
        // console.log(this.props)
    }

    handleEmpty(){
        deleteItem(this.props.id).then(res => console.log(res))
        this.setState({isEmpty:true,modalOpen:false,infoComponentActive:false,info:null}) 
        this.props.handleOccupied(-1)
    }
    showInfo(){
        this.setState({ infoComponentActive:true}) 
    }
    showForm(){
        this.setState({ formActive:true})

    }
    handleAddForm(data){  
    
        data.locId = this.props.id;
        CreateItem(data)
        .then(r => console.log(r))
        .catch(e => console.log(e))  
            this.setState({isEmpty:false,info:data,formActive:false,modalOpen:false})
            this.state.isEmpty === false?this.props.handleOccupied(-1):this.props.handleOccupied(1);
    }
    clearModal(){
        console.log("clear");
      
       this.setState({modalOpen:false,formActive:false,infoComponentActive:false })
    }
    clearModalAndEdit(data){
        editItem(this.props.id, data.quantity).then( res => console.log(res))
       this.setState({info:data})
    }

   componentDidMount(){
       const {data}  = this.props;
       if(data !== null && data !== undefined){ 
        this.setState({isEmpty:false,info:data,formActive:false,modalOpen:false})
        this.props.handleOccupied(1)
        
       }
     
   }

    render(){
        
        const {isEmpty,info,modalOpen,formActive,infoComponentActive} = this.state;
        // const {id,histoty} = this.props;
       
         
        return(

            <div onClick={this.handleActive} className={isEmpty === true?"spot":"spot acupate"}>
                
                 { modalOpen === false? 
                      isEmpty === true?
                     <button onClick={this.showForm}><BsPencilSquare size={24}  color={"rgb(132, 130, 130)"}></BsPencilSquare > </button> :
                     <button onClick={this.showInfo}><BsInfoCircle  size={24}  color={"#fff"}></BsInfoCircle></button>:null} 
                     {formActive === true && <div className="modal"> <AddInfo  clearModal={this.clearModal} addinfo={this.handleAddForm} /> </div> }
                    { infoComponentActive === true && info !== null?
                    <div className="modal">
                      <ModalInfo data={info}  history={this.props.history} clearmodal={this.clearModal} deleteInfo={this.handleEmpty}  clearModalAndEdit={this.clearModalAndEdit} />
                     </div>:null}
             
            </div>
        )
    }
}

export default Spot;