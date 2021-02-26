import React from 'react';
import UploadTimeline from './UploadTimeline'
import InviteTimeline from './InviteTimeline'
import CategoryTimeline from './CategoryTimeline'
import FeatureTimeline from './FeatureTimeline'

// function RightTimeline(){
function RightTimeline(props){

    const func = props.setTrue
   
    return(
        <div>
            <div className="content_rgt">
            <UploadTimeline setTrue = {func} />

            <InviteTimeline />
             <CategoryTimeline />
             <FeatureTimeline />
              
            </div>
        </div>
    )
}

export default RightTimeline;