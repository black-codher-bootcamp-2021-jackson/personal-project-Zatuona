// import React, {useState} from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'
// import axios from 'axios';
import './AdminLogin.css'
import orange_admin_logo from './orange_admin_logo.png';
import HSExtra_Logo from './HSExtra_Logo.png';




function AdminLogin () {

// const [employeeId, setEmployeeId] = useState('');
// const [password, setPassword] = useState('');
// const [rememberMe, setRememberMe] = useState(false);

// console.log(employeeId, password, rememberMe);


// const sendAdminLogintoAPI = () => { axios.post('/api/login/admin', employeeId, password, rememberMe )
// }

return (
  
  
<div class="frame">

<div class="white-pg-content-box"> 

<img class="AdmLoginPageLogo" alt="" src={HSExtra_Logo}/>
<h1 class='AdmLoginPageTitle'>LOG IN</h1>


<div class="AdminProfileLogo">
<img class="loginadminlogo" alt="" src={orange_admin_logo}/>

</div>



<div className='AdminLoginForm'>
  <form action="/user/:employeeId">
    
  
      <label class="empIDLabel">Employee ID</label>
      <input class='empIDfield' name ='employeeID'
      // onChange={(e) => setEmail(e.target.value)
      // } 
      />
      <br></br>
    

    
      <label class="ALpasswordLabel">Password</label>
      <input class='ALpasswordfield' name='password'type ='password'
      // onChange={(e) => setPassword(e.target.value)}
      />
    
      
    <label class="ALcheckboxLabel">'"Hey, remember me!"'</label>
    <input class="ALcheckboxBox"type="checkbox" 
    // onChecked={(e) => setRememberMe(e.target.checked)} 
    />
     
    <input class="ALSubmitBtn" type='submit' value ='Log in'></input>
    
      
       {/* onClick={sendCustomerLogintoAPI}> */}
  

 </form>

</div>












<form action="/login">

<button class="BacktoLoginPage-btn">Go back</button>

</form>






  





  </div>


</div>

  // </div>
)

    }

export default AdminLogin;











// {/* <form>
    
    
//     <label>Employee Id </label>
//     <input name ='employeeId'
//     // onChange={(e) => setEmployeeId(e.target.value)
//     // } 
//     />
 

  
//     <label>Password</label>
//     <input type ='password'
//     name ='password'
//     // onChange={(e) => setPassword(e.target.value)}
//     />
  
    
//   <Checkbox label='"Hey, remember me!"' onChecked={(e) => setRememberMe(e.target.checked)} />
   
  
//   <Button name='AdmLog-Submit-Button'type='submit'onClick={sendAdminLogintoAPI}>Login</Button>
// </form> */}