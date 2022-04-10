import {getFileName} from "../../../util/api";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom"
import "./filelist.css";
import { AiOutlineArrowRight} from "react-icons/ai";
//AiOutlineArrowRight
const ListDownloads = (props)=>{
    
    const [list,setList] = useState([]);
    
  useEffect(()=>{ 
  getFileName().then(responese =>{
     const {files} = responese;
        setList(files)
  }).catch( e => console.log(e));
     },[])

  return(
  <div className="list-wrap">
                <div className="description">
                    <h2>List of files downloded</h2>
                    <p>select the file that you which to fetch the data to create orders</p>
                </div>

                 <div>
                  {list.map((file,i)=>{

                            return(
                                  <div className="list" key={i}>
                                    <p>{file}</p>
                                     <Link to={`/list/view/${file}`}><AiOutlineArrowRight color={"#ea4c89"} size={30} /></Link>
                                     </div>
                                     )
                                     
                                     })
                    }
                  </div>
   </div>)


         
        
  
    

    } 
export default ListDownloads;