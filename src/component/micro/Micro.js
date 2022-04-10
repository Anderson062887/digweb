import {Link,Route,Redirect} from "react-router-dom";
import Bacteria from "./subTopics/bacteria";
import Virus from "./subTopics/Virus";
// import {data} from "./data";
import Timer from "../timer/Timer";
import NewTest from "../chooseTest/ChooseTest"
import Parasites from "./subTopics/Parasites";


 

const Micro = ({match})=>{

   return( 

  <div>
            {/* <div className="sub-menu" >
              <h2>Topics</h2>
                    <ul>
                    <li>
                        <Link to={`${match.url}/bacterias`}>Bacterias</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/virus`}>Virus</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/parasites`}>parasites</Link>
                    </li>
                    </ul>
            </div> */}

                    <div>
                    

                       <Route exact path="/microorganisms" render={()=>
                       <Redirect to={`${match.path}/bacterias`} /> } />
                        
                        <Route exact path={`${match.path}/bacterias`} render={(props)=>( 
                        <Timer>
                         {( ready) => <> <Bacteria/>  {ready && <NewTest  {...props}/> } </> }
                        </Timer>  )}/>

                        <Route  exact path={`${match.path}/virus`} render={(props)=>(
                        <Timer>
                        { (ready) => <> <Virus /> {ready && <NewTest {...props} />} </> }
                       </Timer> )} /> 

                        <Route  exact path={`${match.path}/parasites`} render={(props)=>(
                          
                       <Timer>
                       { (ready)=> <> <Parasites /> {ready === true && <NewTest  {...props} /> } </>}
                       </Timer> )} /> 
                 </div>
</div>  

       )    }
export default Micro;