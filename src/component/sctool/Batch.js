import React,{useState,useEffect} from "react"
import "./tool.css"
import  {sendData} from "../../util/api"

export const Batch = ({add,items})=>{
   const [name,setName] = useState("")

    const handleSelect = (e)=>{
      setName(e.target.value)
    }
    const handleSubmit = (e)=>{
        // console.log(name)
        e.preventDefault();
        const myDate = new Date();
        if(name !== ""){
            add({
                id:Math.floor(Math.random() * 1000) + 1,
                name:name,
                date:myDate.toLocaleDateString(),
               time: myDate.toLocaleTimeString(),
    
            })
         sendData(name).then(d => console.log(d)).catch(e => console.log(e))

        }
   
        setName("");
        e.target.reset();
    }
    // useEffect(()=>,[])

    return(

        <div className="form-box" >
            <h1>Make a Batch</h1>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="name" style={{display:"block"}}>Batch name: {name}</label>
                    <select name="batchName" id="name" value={name} onChange={handleSelect} onBlur={handleSelect} >
                        <option />
                        {items.map((i)=> <option  key={i} value={i} >{i}</option> )}

                    </select>
                </div>
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}
