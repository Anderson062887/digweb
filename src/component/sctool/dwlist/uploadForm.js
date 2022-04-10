import React from "react";
import "./uploadForm.css";
import {Warning} from "../../warning";
import { FcCheckmark} from "react-icons/fc";
import XLSX from "xlsx"

class StrategyFilter{
    filterArrayLengthOf7(list){
        console.log("handle length 7")
       return list;
    }
    filterArrayLengthOf8(a){
        console.log("handle length 8")
        return [a[0],a[1]+a[2],...a.slice(3)];
     }
     filterArrayLengthOf9(a){
        console.log("handle length 9")
        return [a[0],a[1]+a[2],...a.slice(4)];
     }
}
const strategyHandler = new StrategyFilter();
class Handler{
    constructor(length,strHandler){
        this.size = length;
        this.next = null;
        this.strategy = strHandler;
    }
    setNext(next){
       this.next = next;
    }
    doHandle(list){
       
      if(this.size === list.length){
         return this.strategy(list)
        
      }
      return false;
    }

    handle(list){
      let found =  this.doHandle(list);
      if(found){
          return found
      }else if(this.next){
         return this.next.handle(list)
      }else{
          return list;
      }
    }
}

class ChainHandler{
    constructor(){
        const handle7 = new Handler(7,strategyHandler.filterArrayLengthOf7)
        const handle8 = new Handler(8,strategyHandler.filterArrayLengthOf8)
        const handle9 = new Handler(9,strategyHandler.filterArrayLengthOf9)
        handle7.setNext(handle8);
        handle8.setNext(handle9);
        this.handler = handle7

    }
    handle(list){
       let result =  this.handler.handle(list);
       console.log(result)
    }
}


class UploadFileForm extends React.Component{
    constructor(){
        super();
      this.state = {
          filename:"",
          file:[],
          error:false,
      }
      this.handler = "";
      this.handleCSV = this.handleCSV.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.handleError = this.handleError.bind(this);
    }
    handleChange({target}){
      
        const {name,value} = target;
        this.setState((prevState)=>{
           return{
               ...prevState,
               [name]:value,
           }
        })
    }

    handleCSV(csv){
        const[,...rows ]=  csv.split("\n")
       return rows.map(r => r.trim().split(",")
        .filter( x =>( x !== " " && x !== "" && x !== "\r" && x !== undefined)))
        .map( a => a.length > 7 ?  a.length === 8?[a[0],a[1]+a[2],...a.slice(3)]: [a[0],a[1]+a[2],...a.slice(4)]  :a)
    }
    formatList(headers,doc){
        const order = {};
         for (let i = 0; i < headers.length; i++) {
             const header = headers[i];
             order[header] = doc[i]
   
         }
         return order;
    }
    async handleFile({target}){
        const file = target.files[0];
        const reg = /\w*\.csv$/;

        /// read exel file
        const reader = new FileReader();

         reader.onload = ({target})=>{
          const {result}= target;
         let book =  XLSX.read(result,{type:"binary"})
         const [order] = book.SheetNames;
         const dta = book.Sheets[order]
         const [,,,RestaurantNumber,...rest ]= XLSX.utils.sheet_to_json(dta)

         for (const key in RestaurantNumber) {
            RestaurantNumber[key] = {store:RestaurantNumber[key].trim(),items:[]};    
           }
          
           rest.map((obj)=>{            
                for (const key in obj) {
                    if(obj[key] !== "-" && key !== "Commissary Pack List"){
            RestaurantNumber[key].items = [...RestaurantNumber[key].items, {item:obj["Commissary Pack List"], qty:obj[key]}];

                    }  
                }
            }) 
            
              this.setState({file:RestaurantNumber})
           
        
         }
        
        
       
        if(typeof file === "object"){
            reader.readAsArrayBuffer(file)
        }
        
      
   //----------------------------------------------
        //  if(!reg.test(file.name)){return}

        //csv files
    //     if(reg.test(file.name)){
    //     const reader = new FileReader();
    //     reader.onload = (evt)=> {
    //      const csv = evt.target.result;
    //      const headers =  csv.split("\n")[0].split(",").filter( d => (d !== "" && d !== " \r"));
    //     const readyList = this.handleCSV(csv)
    //     const readyListOfOrder = readyList.map(doc =>  this.formatList(headers,doc));
    //      this.setState({file:[...readyListOfOrder]})
      
    //     };

    //     reader.readAsText(file);
    //    }
   

    
       return;
     
    }

    handleError(){
  
      this.handler = setTimeout((f)=>{
            this.setState({error:false})
        },2000)
            
    }

  handleSubmit(e){
        e.preventDefault();
        const {file,filename} = this.state;
        console.log(filename) 
        console.log(file)
        if (filename && file.length > 0) {
            console.log(filename) 
            console.log(file)
        }
   
            this.setState({error:true})
            this.handleError()
        
       
    }


    
    componentWillUnmount(){
        console.log("cleaning handler")
     clearTimeout(this.handler)
    }

    render(){
        const {filename,file,error} = this.state;
      
       
        return(
            <div className="uploadfile-form-wrapper">

              
            <form className="uploadfile-form">
            
                <h2>Upload List</h2>
             
                <div className="uploadfile-input-field">
                <label htmlFor="filename" >File Name</label>
            <input type="text" name={"filename"}  value={filename} onChange={this.handleChange} disabled={error === true?true:false}/>
         
             <Warning  show={error === true && (filename === "" || filename === " " ) ?true:false}  message={"must enter a file name"} />
                </div>

                <div className="uploadfile-input-field">
                <label htmlFor="file" >File  {file.length > 0 && <FcCheckmark  size={30}/>}</label>   
               
            <input name={"file"} type="file" onChange={this.handleFile} disabled={error === true ||file.length>0?true:false}/>
             <Warning  show={file.length === 0 && error === true ?true:false}  message={"file should be csv file"} />
    
                </div>

                <button onClick={this.handleSubmit} className="form-sub">Upload</button>
            </form>
            </div>
        )
    }
}

export default UploadFileForm;