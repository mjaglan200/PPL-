import React,{useState, useEffect} from 'react';
// import NavTimeline from './NavTimeline'
import axios from 'axios'
import RightTimeline from './RightTimeline/RightTimeline'
import LeftTimeline from './LeftTimeline/LeftTimeline'


// import FooterTimeline from './FooterTimeline'

function Timeline(){
  const [checkTrue,setTrue]= useState(false)
  const checkvalue = (value) =>{
    setTrue(value)
  }
  const myFun = (value) =>{
    // console.log("hello mohittttt")
    setTrue(value)

  }
    return(
        <div>
          <meta charSet="utf-8" />
        <title>Home</title>
         
          <div className="container">
          <div className="content">
         <RightTimeline setTrue = {myFun}/>
          {/* <RightTimeline /> */}

          <LeftTimeline check = {checkTrue} fun = {checkvalue}/>
          {/* <LeftTimeline /> */}

          </div>
          <div className="clear" />

          </div>
      
      </div>
    )
}
export default Timeline;