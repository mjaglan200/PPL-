import React,{useState, useEffect} from 'react';
// import NavTimeline from './NavTimeline'
import axios from 'axios'
import RightTimeline from './RightTimeline/RightTimeline'
import LeftTimeline from './LeftTimeline/LeftTimeline'
import { connect } from 'react-redux';
import action from '../../Redux/action'


function Timeline(){

    return(
        <div>
          <meta charSet="utf-8" />
        <title>Home</title>
         
          <div className="container">
          <div className="content">
         <RightTimeline />
          <LeftTimeline />
          </div>
          <div className="clear" />

          </div>
      
      </div>
    )
}


export default Timeline;