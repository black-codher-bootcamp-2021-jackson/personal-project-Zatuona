// import React, {useState} from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'
// import axios from 'axios';
import orange_customer_logo from './orange_customer_logo.png';
import HSExtra_Logo from './HSExtra_Logo.png';
import './CustomerLogin.css'




function CustomerLogin () {

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [rememberMe, setRememberMe] = useState(false);

// console.log(email, password, rememberMe);


// const sendCustomerLogintoAPI = () => { axios.post('/api/login/customer', email, password, rememberMe )
// }

return (
  
<div class="frame">

<div class="white-pg-content-box"> 

<img class="CLoginPageLogo" alt="" src={HSExtra_Logo}/>
<h1 class='LoginPageTitle'>LOG IN</h1>


<div class="customerProfileLogo">
<img class="logincustomerlogo" alt="" src={orange_customer_logo}/>

</div>



<div className='CustomerLoginForm'>
  <form action="/user/:customerId">
    
  
      <label class="emailLabel">Email</label>
      <input class='emailfield' name ='email'
      // onChange={(e) => setEmail(e.target.value)
      // } 
      />
      <br></br>
    

    
      <label class="passwordLabel">Password</label>
      <input class='passwordfield' name='password'type ='password'
      // onChange={(e) => setPassword(e.target.value)}
      />
    
      
    <label class="checkboxLabel">'"Hey, remember me!"'</label>
    <input class="checkboxBox"type="checkbox" 
    // onChecked={(e) => setRememberMe(e.target.checked)} 
    />
     
    <input class="CLSubmitBtn" type='submit' value ='Log in'></input>
    
      
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

export default CustomerLogin;