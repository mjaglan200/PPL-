import React from 'react'
import ProfileTimeline from './ProfileTimeline'
import Checkbox from './Checkbox'
import LeftPhoto from './LeftPhoto'

// function LeftTimeline(){
function LeftTimeline(props){

    const fun = props.fun;
    console.log("Inside Left TimeLIne : ",fun)
    return(
        <div>
             <div className="content_lft">
              {/* <div className="contnt_1"> */}
              
                   <Checkbox />
                  <ProfileTimeline />
                 
              
              {/* <LeftPhoto /> */}
              <LeftPhoto check = {props.check} set = {fun}/>

            </div>
        </div>
    )
}

export default LeftTimeline;