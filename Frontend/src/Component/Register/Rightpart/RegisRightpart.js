import React,{useState} from 'react'
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import Address from '../../../config/config'
function Rightpart(){
  let history =useHistory();
  const [email,setemail] =useState('');
  const [password,setpassword] =useState('');
  const [username,setusername] =useState('');
  const [fname,setfname] =useState('');
  const [lname,setlname] =useState('');
  const [receivedata,setreceivedata]=useState({});

   let submitbtn=(event)=>{
    event.preventDefault();
  
  let userdata={
    username,
    email,
    password,
    fname,
    lname
  };

  console.log(userdata);

  axios.post(Address.address[8],userdata).then((response)=>{
  // setreceivedata(response);

  if(response.data == 'User Successfully  Crerated')
      {
        console.log("User Found")
        history.push('/Login')
        
      }else{
        setreceivedata(response)
        console.log("not found")
        
      }



}
)

   }
    return(
        <div>  
           
            <div className="content_rgt">
              <div className="register_sec">
              <form onSubmit={submitbtn}>
                <h1>Create An Account</h1>
                <ul>
                  <li><span>Username</span><input type="text" placeholder="Enter your username" name="username"   onChange={(event) =>{setusername(event.target.value)}} /></li>
                  <li><span>Password</span><input type="text" placeholder="Enter your password" name="password"   onChange={(event) =>{setpassword(event.target.value)}} /></li>
                  <li><span>Email</span><input type="text" placeholder="Enter your email" name="email"            onChange={(event) =>{setemail(event.target.value)}} /></li>
                  <li><span>First Name</span><input type="text" placeholder="Enter your first name" name="fname"  onChange={(event)=>{setfname(event.target.value)}} /></li>
                  <li><span>Last Name</span><input type="text" placeholder="Enter your last name" name="lname"    onChange={(event)=>{setlname(event.target.value)}} /></li>
                  <li><input type="checkbox" />I agree to Term &amp; Conditions</li>
                  <li><input type="submit" defaultValue="Register"  /></li>
               
                </ul>
                <h1>{receivedata.data}</h1>
                <div className="addtnal_acnt">I already have an account.<Link  to='/Login' style={{color:'black'}} >Login My Account</Link></div>
                </form>
              </div>
            </div>
            
          </div>
        
        
      
      
    )
}

export default Rightpart;