import {useState} from "react"
import "./addTask.css"
const CreateTask = ()=>{
const [inp,setInp] = useState({task:"",description:""})

const handleChange =(e)=>{
    const {name,value} = e.target;
     console.log(inp)
    setInp({...inp ,[name]:value})
}
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(inp);
  setInp({task:"",description:""})
  return;
}

    return(
        <div className="form-wrap">
            <form onSubmit={handleSubmit}>
              <div>
                 <label htmlFor="task">task</label>
                 <input name="task" id="task" type="text" placeholder="New task" 
                  onChange={handleChange} 
                  value={inp.task}/>
                </div> 
                <div>
                 <label htmlFor="description">description</label>
                 <input name="description" id="description" type="text" placeholder="description"
                  onChange={handleChange} 
                  value={inp.description} />
                </div>  
                <button className="btn" style={{backgroundColor:"blue"}}>Submit</button>
            </form>
        </div>
    )
}

export default CreateTask