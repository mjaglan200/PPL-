import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import Address from '../../config/config'
const Reset=(props)=>{
const[emailreceived,setemailreceived]=useState('')
const[text1,settext1]=useState('')
const[text2,settext2]=useState('')

const[p,setp]=useState('')

    const history=useHistory()
    // setemailreceived()
   let email=history.location.state.params
 
    console.log(email)

    let txt1=(e)=>{
        settext1(e.target.value)
    }
    let txt2=(e)=>{
        settext2(e.target.value)
    }
    



let click=()=>{
  
   
    
    if(text1==text2){
        let data={email,text1}
        setemailreceived(email)
        axios.post(Address.address[7],data).then((response)=>{
            if(response.data.n==1){
        setp('successfully pass changed')}
        else{
            setp('failed')
        }
           

            console.log('success')

    
        })
    }else{
        console.log('enter correct pass')
    }
   
}

    
    return(
        <div>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
        



        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <h1>Reset Password</h1>
                <ul>
                  <li><span>Enter New Password</span><input  type="text" placeholder="Enter your new password" onChange={txt1} /></li>
                  <li><span>Confirm Password</span><input type="text" placeholder="Enter your password again" onChange={txt2} /></li>
                  <li><input type="submit" defaultValue="Submit" onClick={click} /></li>
    <li>{p}</li>
                </ul>
              </div>
            </div>
            <div className="content_lft">
              <h1>Welcome from PPL!</h1>
              <p className="discrptn">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
              <img src="images/img_9.png" alt="" /> </div>
          </div>
        </div>
        <div className="clear" />

        
      </div>
    )
}

export default Reset;