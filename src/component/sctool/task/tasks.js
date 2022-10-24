


export const Task = (props)=>{

    const areas = [{name:"kitchen"},{name:"veg"},{name:"packing",tasks:[{t:"clean the floor"},{t:"clean the tables"}]},]
    return(
        <div className="box-wrapper">
            <p>tasks</p>
            {areas.map((e,i)=> <div key={i}> <p>{e.name}</p></div>)}
        </div>
    )
}