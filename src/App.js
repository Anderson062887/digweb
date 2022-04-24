import './App.css';
import React,{useReducer} from "react";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import {Nav} from "./component/Nav";
import Micro from "./component/micro/Micro";
import Tool from "./component/sctool/Tool";
import Login from "./user/login";
import Register from "./user/register";
import {Consumer} from "./component/context/context";
import {PrivedRoute} from "./user/PreviedRoute";
import ListDownloads from "./component/sctool/dwlist/FileList";
import Order from "./component/sctool/dwlist/Order";
import {Sidebar} from "./component/sidebar/sidebar";
import  UploadFileForm from "./component/sctool/dwlist/uploadForm";


 
const Home =()=>{

  return(
    <>
    <Consumer>
      {({user})=>{
        
       return <div>
            {user === null &&<>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </>}
       
        <h1>Home page component</h1>
         
      </div>
      }}

    </Consumer>
    </>
  )
}

const Personal =()=>(
  <div>
    <h1>Personal Health PrivedRoute component</h1>
    <p>Personal information</p>
  </div>
)



function App() {
const [show,toggleNav] = useReducer( show => !show ,false )


  return(
    <Consumer>

      {({setUser,user})=>{
      //  console.log(user)
        return (
          <div className={user !== null?"two-col-layout":"App"}>
            <Router>
                  {user !== null && <Sidebar show={show}/>} 
             <div className="route-box"> 
                  {user !== null && <Nav  hideNav={toggleNav} show={show}/> } 
                  
            <Switch>
                  
                   <Route exact path="/login" render={(props)=><Login {...props} setuser={setUser} /> } /> 
                   <Route exact path="/register" component={Register} /> 
                   <Route exact path="/" component={Home}/> 
                   <PrivedRoute path="/microorganisms" component={Micro} />
                   <PrivedRoute path="/tools" component={Tool} />
                   <PrivedRoute exact path="/personalhealth" component={Personal} />
                   <PrivedRoute exact path="/list" component={ListDownloads} />
                   <PrivedRoute exact path="/list/upload" component={UploadFileForm} />
                   <PrivedRoute exact path="/list/view/:filename" component={Order} />
            
                  
                  {/* <Route exact path="/login" component={Login} user={context.user} />   */}           
                    {/* <Route exact path="/" render={()=><div>Home page</div>} /> */}
                    {/* <Route exact path="/personalhealth" render={()=><div>Personal Health</div>} /> */}
                    {/* <Route path="/microorganisms" render={(props)=> <Micro {...props} />} /> */}
                    {/* <Route  path="/tools" render={(props)=> <div><Tool {...props}/></div>} /> */}

                      <Route path="*" render={()=><div>404</div>} />
              </Switch> 
              </div>
            </Router>
          </div>
        )
      }}
      
     </Consumer>
  );
    }

    // <div className="App">
 
    //   <Router>
    //   <Nav />
    //   <Switch>
          
    //           <Route exact path="/login" component={Login} />  
    //           <Route exact path="/register" component={Register} />  
    //           <Route exact path="/" render={()=><div>Home page</div>} />
    //           <Route exact path="/personalhealth" render={()=><div>Personal Health</div>} />
    //           <Route path="/microorganisms" render={(props)=> <Micro {...props} />} />
    //           <Route  path="/tools" render={(props)=> <div><Tool {...props}/></div>} />

    //     {/* <Route path="*" render={()=><div>404</div>} /> */}
    //     </Switch> 
    //   </Router>
  
    // </div>
  //);
//}

export default App;
