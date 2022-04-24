import React from "react";
// import {AddInfo} from "./addinfo/addInfo";
import Col from "./section/col";
// import  {getWalkInData}from "../../util/api";
import  {getWalkInData}from "../../../util/api";
import Loader from "../../Loader/loader";
import DownLoad from "./download/download";


// const sideLeftButtom = [{id:"ls-b-0"},{id:"ls-b-1"},{id:"ls-b-2"},{id:"ls-b-3"}]
// const sideLeftTop = [{id:"ls-t-0"},{id:"ls-t-1"},{id:"ls-t-2"},{id:"ls-t-3"}];

// const centerButtom = [{id:"c-b-0"},{id:"c-b-1"},{id:"c-b-2"},{id:"c-b-3"},{id:"c-b-4"},{id:"c-b-5"},{id:"c-b-6"},{id:"c-b-7"},{id:"c-b-8"}];
// const centertop = [{id:"c-t-0"},{id:"c-t-1"},{id:"c-t-2"},{id:"c-t-3"},{id:"c-t-4"},{id:"c-t-5"},{id:"c-t-6"},{id:"c-t-7"},{id:"c-t-8"}];
// const centerfloor = [{id:"c-fl-0"},{id:"c-fl-1"},{id:"c-fl-2"},{id:"c-fl-3"},{id:"c-fl-4"},{id:"c-fl-5"},{id:"c-fl-6"},{id:"c-fl-7"},{id:"c-fl-8"}];

// const siderightButtom = [{id:"rs-b-0"},{id:"rs-b-1"},{id:"rs-b-2"},{id:"rs-b-3"}];
// const siderightTop = [{id:"rs-t-0"},{id:"rs-t-1"},{id:"rs-t-2"},{id:"rs-t-3"}];

// const frontRightButtom = [{id:"f-b-0"},{id:"f-b-1"},{id:"f-b-2"},{id:"f-b-3"}]
// const frontRightTop = [{id:"f-t-0"},{id:"f-t-1"},{id:"f-t-2"},{id:"f-t-3"}];

// const frontLeft = [{id:"fl-b-0"},{id:"fl-t-0"}]
            // spots:{
            //     left:[...sideLeftButtom,...sideLeftTop],
            //     center:[...centerfloor,...centerButtom,...centertop],
            //     right:[...siderightButtom,...siderightTop],
            //     fromRight:[...frontRightButtom,...frontRightTop],
            //      fromLeft:[...frontLeft]},

                //     spots:[
                //  [...sideLeftButtom,...sideLeftTop],
                //  [...centerfloor,...centerButtom,...centertop],
                //  [...siderightButtom,...siderightTop],
                //  [...frontRightButtom,...frontRightTop],
                //  [...frontLeft]],


class Walkin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                spots:[],
              occupied:0, 
              loading:true,  
        }
        this.handleOccupied = this.handleOccupied.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(box){
        console.log(box);
    }

    handleOccupied(delta){
        this.setState((prev)=>{
           return {...prev.spots,
            occupied:prev.occupied + delta,
            }
        })

    }

   async  componentDidMount(){


    try {
        const {locations} = await getWalkInData();
        const left = locations.filter(space => space.locId.includes('ls'));
       
         const center = locations.filter(space => space.locId.includes('c'));
         const right = locations.filter(space => space.locId.includes('rs'));
         const fromRight = locations.filter(space => space.locId.includes('f-'));
         const fromLeft = locations.filter(space => space.locId.includes('fl-b'));
         

        this.setState((prevState)=>{
            return {
                ...prevState,
                spots:[left,center,right,fromRight,fromLeft],
                loading:false,
            }
        })

          } catch (error) {
             console.log(error)
         }

    }

    render(){
        // const {left,center,right,fromRight,fromLeft} = this.state.spots;
        const [left,center,right,fromRight,fromLeft]= this.state.spots
        const {occupied }= this.state;
     
      if(this.state.loading === true){
          return <Loader />
      }else{
          const downloadableData = this.state.spots.reduce((ac,next)=>[...ac,...next],[])
          .map((d)=> d.current)
          .filter((d)=> d !== null && d !== undefined)
          .map( d => ({name:d.name,quantity:d.quantity}));
          //const historyData = this.state.spots.reduce((ac,next)=> [...ac,...next],[]).map(s => s.spaceHistory).filter(a => a.length > 0)
     
        return(
 
            <div className="box-wrapper">
                         
                    <div className="walkin grid">
                        <DownLoad data={downloadableData }/>              
                         <Col cls={"side-left grid-item"} locs={left} idx={0} handleSelect={this.handleSelect} handleOccupied={this.handleOccupied} /> 
                         <Col  cls={"central grid-item"} locs={center} idx={1} handleSelect={this.handleSelect}   handleOccupied={this.handleOccupied}/>
                         <Col   cls="side-right grid-item" locs={right} idx={2} handleSelect={this.handleSelect}  handleOccupied={this.handleOccupied}/>
                        <Col   cls="front-right grid-item" locs={fromRight} idx={3} handleSelect={this.handleSelect}  handleOccupied={this.handleOccupied}/>
                        <Col  cls="front-left grid-item" locs={fromLeft} idx={4} handleSelect={this.handleSelect}  handleOccupied={this.handleOccupied} /> 
                        <div className="info"> Number of space occupied( { occupied} )</div>

                    </div> 

            </div>
        )

                    }
    }
}
export default Walkin;