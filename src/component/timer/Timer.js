import React,{useState,useEffect} from "react";
import { FaBrain} from "react-icons/fa";


// const HOCTimer = (Component)=>{
    
//     const  Mytimer = (props)=>{

//     const [ready,setReady] = useState(false);
//     const [displaytime,setDisplayTime] = useState("")

//     const handleTestReady = ()=>{
//         setReady(!ready);
//       }



//       const handleTimeOnPage = ()=>{
//         const session =  JSON.parse(window.sessionStorage.getItem("session"));
//         const now = Date.now();
//         const secons = Math.floor((now - session.time)/1000);
//         const minutes = Math.floor((now - session.time)/1000/60);
//         const hour = Math.floor((now - session.time)/1000/60/60);
//         const currentTimeOnPage = `${hour}:${minutes > 10?minutes:"0"+minutes}:${secons < 60?secons:(secons -(minutes * 60))}`;
//         if(minutes >= 1){
//           setReady(!ready); 
//         }
//           setDisplayTime(currentTimeOnPage)
//         console.log(`${hour}:${minutes > 10?minutes:"0"+minutes}:${secons < 60?secons:(secons -(minutes * 60))}`)
//       }

//       useEffect(()=>{
//         window.sessionStorage.setItem("session",JSON.stringify({time:Date.now()}))
//       },[ready])
//          const [Content,Test] = props.children;
//       const Myprops = {
//         ready,
//         getTimeOnThePage:handleTimeOnPage,
//         Content,
//         Test,
//         btnTitle:props.title,
//         handleReady:handleTestReady,
//     }


//      return <Component {...Myprops}/> ;
//    }

//    return Mytimer;
// }

// const PageWithTimer = ({ready,getTimeOnThePage,Content,Test,handleReady})=>{
  
//    return (
//        <>
//           {Content}
//           {ready === false?
//         <button onClick={getTimeOnThePage}>Test your Knowlage</button>:
//         <div>
//         {Test}
//         <button onClick={handleReady}>Reset test</button>
//         </div>}
//        </>
//    )
// }
// export default HOCTimer(PageWithTimer);



const Timer = ({children})=>{

   
        const [ready,setReady] = useState(false);
 
        const handleTestReady = ()=>{
            setReady(!ready);
          }
    
    
    
          const handleTimeOnPage = ()=>{
            const session =  JSON.parse(window.sessionStorage.getItem("session"));
            const now = Date.now();
            const secons = Math.floor((now - session.time)/1000);
            const minutes = Math.floor((now - session.time)/1000/60);
            const hour = Math.floor((now - session.time)/1000/60/60);
            // const currentTimeOnPage = `${hour}:${minutes > 10?minutes:"0"+minutes}:${secons < 60?secons:(secons -(minutes * 60))}`;
      
            if(minutes >= 0){
              setReady(!ready); 
            }
            //   setDisplayTime(currentTimeOnPage)
            console.log(`${hour}:${minutes > 10?minutes:"0"+minutes}:${secons < 60?secons:(secons -(minutes * 60))}`)
          }
    
          useEffect(()=>{
             window.sessionStorage.setItem("session",JSON.stringify({time:Date.now()}))
          },[ready])

        return (
            <>
           { children(ready)}
           <div className="btn-control">
                {ready === false?
            <><FaBrain size={26} color="gray"/> <button onClick={handleTimeOnPage} className="btn btn-submit">Test your Knowlage</button></>:
             
             <button onClick={handleTestReady} className="btn btn-submit">Reset test</button>
                 } 
             </div>
             </>
        ) 
       

}
 export default Timer;
// class TimerComponent extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             testReady:false,
//         }
//         this.handleTest = this.handleTest.bind(this)
      
//     }
//     hadleSession(){
//         return JSON.parse(window.sessionStorage.getItem("session"));
//     }
//     addSession(){
//         window.sessionStorage.setItem("session",JSON.stringify({path:this.props.path,time:Date.now()}))
//     }
//     componentDidMount(){
//        this.addSession();
//     }
//     handleTest(){
//         const session = this.hadleSession();
//         const timeOnPage = Math.floor((Date.now() - session.time)/1000/60);
//         console.log(`time on this page ${timeOnPage}`)

//     }
//     componentDidUpdate(prevProps,prevState){
//         if (this.props.path !== prevProps.path) {
//             const session = this.hadleSession();
//             const timeOnPage = Math.floor((Date.now() - session.time)/1000/60);
//             console.log(`time on this page ${timeOnPage}`)
//             this.addSession()
//         }
//     }
//     render(){
//         return this.props.children;
//     }
// }
