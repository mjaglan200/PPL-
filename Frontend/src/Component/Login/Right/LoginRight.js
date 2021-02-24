import React,{useState} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import Address from '../../../config/config'

function Right(){
  let history =useHistory();
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('')
    const [receivedata,setreceivedata]=useState({});
    const [value, setValue] = useState('');
    
    const localS = (event) => {
        setemail(event.target.value);
        localStorage.setItem('email', event.target.value);
       
      setValue(event.target.value);
     

    };
    

    let submitbtn=(event)=>{


      event.preventDefault();
      
      let userdata={
        email,
        password
      }
      axios.post(Address.address[2],userdata).then(response=>{ 

      setreceivedata(response)
      if(response.data == 'matched')
      {
        console.log("User Found")
        history.push('/Timeline')
        
      }else{
        setreceivedata(response)
        console.log("not found")
        
      }
       

      })
    }

    

return(
    <div>
        <meta charSet="utf-8" />
        <title>Login Account</title>
            <div className="content_rgt">
              
              <div className="login_sec">
              <form onSubmit={submitbtn}>
                <h1>Log In</h1>
                <ul>
                  <li><span>Email-ID</span><input  type="text" placeholder="Enter your email" onChange={localS}  /></li>
                  <li><span>Password</span><input type="text" placeholder="Enter your password" onChange={(event=>{setpassword(event.target.value)})} /></li>
                  <li><input type="checkbox" />Remember Me</li>
                  <li><input type="submit" defaultValue="Log In"   /><Link to="/Forgot">Forgot Password</Link></li>
                </ul>
                <div className="addtnal_acnt">I do not have any account yet.<Link  to='/Register' style={{color:'black'}} >Create My Account Now</Link></div>
                <h1>{receivedata.data}</h1>
                </form> 
                 </div>
            
            </div>
           
          </div>
       
)
}

export default Right;