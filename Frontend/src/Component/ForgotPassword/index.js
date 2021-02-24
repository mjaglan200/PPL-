import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import Address from '../../config/config'

const  Forgot=()=>{
    const history=useHistory()
    const [num,setnum]=useState()
    const [email,setemail]=useState('')
    const [otp,setotp]=useState('')
    const [show,setshow]=useState(false)
    const [warning,setwarning]=useState("")
    
    const localS = (event) => {
        setemail(event.target.value);
       
       
    };
    const Linksent=()=>{
    let userdata={
        email:email
      
      }
      
      axios.post(Address.address[0],userdata).then((response)=>{
          console.log("aaaa",response.data)
          setshow(response.data)
          if(response.data)
          {        console.log(email)
            axios.post(Address.address[1],userdata).then(response=>{
               console.log("aasd",response.data.otp)
               setotp(response.data.otp)
            //    console.log(otp)
    
    
           })
        }
    }
      )
    }
    const updateotp=(event)=>{
            setnum(event.target.value)
    }
    const checkotpnum=()=>{
        if(otp==num){console.log("congrats ") 
        history.push("/Reset",{params:email})}
        
        else{console.log("wrong otp")
    setwarning("Wrong otp")}
    }

    return(
        <div>
        <meta charSet="utf-8" />
        <title>Forgot Password</title>
        
        
       
       
      {show?
      <div className="popup_sec" id="pop_forgt"  >
        <div className="clos_btn"><img src="images/clos.png" alt="" id="clos_pop" /></div>
        <div className="pop_hdr">A mail has been send to your e-mail Id for Reset Password Link</div>
        <div className="man_contnt">
          <span>Please Check Your Mail Box!</span>
          OTP:<input type="text" /><br /><br />
          <input type="submit" defaultValue="Ok" />
        </div>
      </div>:false}

      {show?
      <div className="popup_sec" id="pop_forgt"  >
        <div className="clos_btn"><img src="images/clos.png" alt="" id="clos_pop" /></div>
        <div className="pop_hdr">A mail has been send to your e-mail Id for Reset Password Link</div>
        
        <div className="man_contnt">
        
          <span>Please Check Your Mail Box!</span>
          OTP:<input type="text" onChange={updateotp} /><br /><br />
      <p>{warning}</p>
          <input type="submit" onClick={checkotpnum} defaultValue="Ok" />
        </div>
      </div>:false}
      



        
        


        <div className="container">
          <div className="content">
            <div className="content_rgt">
              <div className="register_sec">
                <h1>Forgot Password</h1>
                <ul>
                  <li><span>Enter E-mail ID</span><input type="text" placeholder="User@gmail.com" onChange={localS} /></li>
                  <li><input type="submit" defaultValue="Submit" onClick={Linksent} /></li>
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

export default Forgot;