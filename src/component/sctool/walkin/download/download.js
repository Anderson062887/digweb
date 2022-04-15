import XLSX from 'xlsx';
import React from "react";
import {saveAs} from "file-saver";
import { AiOutlineDownload} from "react-icons/ai";


class DownLoad extends React.Component{
    constructor(props){
       super(props);
        this.state = {
            filetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            extention:".xlsx",
        }
      
      this.handleData = this.handleData.bind(this) 
    }
    handleData(){
       const st = JSON.stringify(this.props.data);
       const par = JSON.parse(st)
        let worksheet = XLSX.utils.json_to_sheet(par);
        let new_workbook = { Sheets:{"data":worksheet},SheetNames:["data"]};
        const buffer = XLSX.write(new_workbook,{bookType:"xlsx",type:"array"})
         const doc = new Blob([buffer],{type:this.state.filetype});
         saveAs(doc,"walk-in-data"+Date.now()+this.state.extention);
    }
  

    render(){
          return(
              <div style={{display:"flex", justifyContent:"center"}} >
                  
                  <button onClick={this.handleData} style={{color:"red", }} >
                     <AiOutlineDownload  size={34}/>
                   </button>
              </div>
          )
    }
}

export default DownLoad;
// var worksheet = XLSX.utils.aoa_to_sheet(data);
// var new_workbook = XLSX.utils.book_new();
// XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");