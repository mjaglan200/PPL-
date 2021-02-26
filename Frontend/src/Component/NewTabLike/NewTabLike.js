import React,{useState, useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom'
import Address from '../../config/config'

import axios from "axios";
import { useParams } from 'react-router-dom'

import UploadTimeline from '../Timeline/RightTimeline/UploadTimeline'
import InviteTimeline from '../Timeline/RightTimeline/InviteTimeline'
import FeatureTimeline from '../Timeline/RightTimeline/FeatureTimeline'
import CategoryTimeline from '../Timeline/RightTimeline/CategoryTimeline'


const NewTabLike=(props)=>{


	const [post, setPost] = useState([]);
    const [name,setname] = useState('')
    const [count, setCount] = useState(0)
    // const [comment,setcomment] = useState(0)
    const [commentCount,setcommentCount] = useState(0)
    const [text,settext]=useState('')
    const [arr,setArr]=useState([])

   
const email=localStorage.getItem('email')
    // access local storage user

    const onchangeText=(a)=>{
        settext(a.target.value)
       
    }
   
   const a= window.location.pathname
    const ids = a.substring(a.lastIndexOf('/') + 1);
    // console.log(ids)
    const id=ids
    let userdata={
        id,email,text
      };

      const comments=()=>{
          axios.post(Address.address[3],userdata).then(response=>{
              setArr(response.data.comment)
              setcommentCount(response.data.comment.length)
            //   console.log((commentCount))
              
        // setcomment(response.data.comment.text)
        // console.log(arr)
        // console.log(comment)
    

          })
      }

    const like=()=>{
    axios.post(Address.address[4],userdata).then(response =>{
        setCount(response.data.Like.length);
        // console.log(response)
        // setChecked(response.data.like)
    })

 }
      
    useEffect(() => {

        
		axios.post(Address.address[5],userdata).then(response => {
            console.log(id)
			// console.log(response.data.image);
            setPost(response.data.image);
            setname(response.data.name)
        });
        
		
    });
    
    useEffect(()=>{
        axios.post(Address.address[4],userdata).then(response =>{
        setCount(response.data.Like.length);
 
    })
    },[])

    return(

        <div>
        <meta charSet="utf-8" />
        <title>Singal Post</title>

    
        <div className="container">
          <div className="content">
            <div className="content_rgt">
             

              <UploadTimeline />
            <InviteTimeline />
            <CategoryTimeline />
            <FeatureTimeline />
              
            </div>
            <div className="content_lft">

        
              <div className="contnt_2">
                <div className="div_a">
                  <div className="div_title">User Interface PSD Source files Web Designing for web</div>
                  <div className="btm_rgt">
                    <div className="btm_arc">Cats</div>
                  </div>
                  <div className="div_top">
            <div className="div_top_lft"><img src="/images/img_6.png" />{name}</div>
                    <div className="div_top_rgt"><span className="span_date">02 Jan 2014</span><span className="span_time">11:15am</span></div>
                  </div>
                  <div className="div_image"><img src={`http://localhost:4444/`+ post} alt="pet" /></div>
                  <div className="div_btm">
                    <div className="btm_list">
                      <ul>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_001.png" alt="share" /></span>Share</a></li>
                        <li><a href="#"><span className="btn_icon"><img src="/images/icon_002.png" alt="share" /></span>Flag</a></li>
                        <li><a href="#" onClick={like} ><span className="btn_icon"><img src="/images/icon_003.png" alt="share" /></span>{count} Likes</a></li>
                        <li><a href="#" onClick={comments}><span className="btn_icon"><img src="/images/icon_004.png" alt="share" /></span>{commentCount} Comments</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {  

            arr.map(item=>{

//  console.log(item.text)
            return(
              
    <div>
        
        <div className="contnt_3">
                <ul>
                  <li>
                    <div className="list_image">
                      <div className="image_sec"><img src="/images/post_img.png" /></div>
                      <div className="image_name">Bharat</div>
                    </div>
                    <div className="list_info">
                     {item.text}
                    </div>
                 
                    <input type="button" defaultValue="Reply" className="orng_btn" />
                  </li>
                   
                </ul>
                <div className="view_div"><a href="#">View more</a></div>
              </div>
        </div>

            )
            })}
                    <ul>      
                     <li>
                    <div className="cmnt_div1">
                      <input type="text"  className="cmnt_bx1" onChange={onchangeText} placeholder="enter comment"  onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'enter comment'} />
                      <input type="submit" className="sub_bttn1" defaultValue="Submit Comment" onClick={comments} />
                    </div>
                  </li></ul>
            </div>
          </div>
          <div className="clear" />
        </div>
       
      </div>
    )
}


export default NewTabLike