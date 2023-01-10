// import React, {useState} from 'react'
// import { Button, Checkbox, Form } from 'semantic-ui-react'
// import axios from 'axios';
import './signup.css'
import HSExtra_Logo from './HSExtra_Logo.png';



function RegisterPage () {

// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [email, setEmail] = useState('');
// const [contactNumber, setContactNumber] = useState('');
// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');
// const [password2, setPassword2] = useState('');
// const [acceptTerms, setAcceptTerms] = useState(false);

// console.log(firstName, lastName, email, contactNumber, username, password, password2, acceptTerms);


// const sendRegistrationInfoToAPI = async () => { 
//   const response = await axios.post('/api/sign-up', {firstName, lastName, email, contactNumber, username, password, password2, acceptTerms} )

//   return response;
// }

return (
  
  
    <div class="SUframe">
    
    <div class="SUwhite-pg-content-box"> 
    
    <img class="SULoginPageLogo" alt="" src={HSExtra_Logo}/>
    <h1 class='SULoginPageTitle'>SIGN UP</h1>
    
    
    <p class="Please">Please fill in all fields below</p>
    
    
    <div className='SULoginForm'>
      <form action="/user/:customerID">
        
      
          <label class="FNLabel">First Name</label>
          <input class='FNfield' name ='first name'
          // onChange={(e) => setEmail(e.target.value)
          // } 
          />
          <br></br>


          <label class="LNLabel">Last Name</label>
          <input class='LNfield' name ='last name'
          // onChange={(e) => setEmail(e.target.value)
          // } 
          />
          <br></br>


          <label class="SUEmailLabel">Email</label>
          <input class='SUEmailfield' name ='email'
          // onChange={(e) => setEmail(e.target.value)
          // } 
          />
          <br></br>
        

          <label class="SUContactNoLabel">Contact Number</label>
          <input class='SUContactNofield' name ='Contact No'
          // onChange={(e) => setEmail(e.target.value)
          // } 
          />
          <br></br>


          <label class="SUUsernameLabel">Username</label>
          <input class='SUUsernamefield' name ='Username'
          // onChange={(e) => setEmail(e.target.value)
          // } 
          />
          <br></br>
        
          <label class="SUpasswordLabel">Password</label>
          <input class='SUpasswordfield' name='password'type ='password'
          // onChange={(e) => setPassword(e.target.value)}
          />
        
          
        <label class="SUcheckboxLabel">"I agree to the terms and conditions"</label>
        <input class="SUcheckboxBox"type="checkbox" 
        // onChecked={(e) => setRememberMe(e.target.checked)} 
        />
         
        <input class="SUSubmitBtn" type='submit' value ='Submit'></input>
        
          
           {/* onClick={sendCustomerLogintoAPI}> */}
      
    
     </form>
    
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    <form action="/">
    
    <button class="SUBacktoLoginPage-btn">Go back</button>
    
    </form>
    
    
    
    
    
    
      
    
    
    
    
    
      </div>
    
    
    </div>
    
      // </div>
    )
    
        }
    

export default RegisterPage;









// <div classname = 'RegisterFormContainer'>
//   <div className='RegisterForm'>
//   <Form>
//     <Form.Field required>
//       <label>First Name</label>
//       <input name ='firstName'
//       onChange={(e) => setFirstName(e.target.value)} />
//     </Form.Field>

//     <Form.Field required>
//       <label>Last Name</label>
//       <input name ='lastName'
//       onChange={(e) => setLastName(e.target.value)}/>
//     </Form.Field>

//     <Form.Field required>
//       <label>Email</label>
//       <input name ='email'
//       onChange={(e) => setEmail(e.target.value)} />
//     </Form.Field>

//     <Form.Field required>
//       <label>Contact Number</label>
//       <input name ='contactNumber'
//       onChange={(e) => setContactNumber(e.target.value)}/>
//     </Form.Field>
    
//     <Form.Field required>
//       <label>Username</label>
//       <input name ='username'
//       onChange={(e) => setUsername(e.target.value)} />
//     </Form.Field>

//     <Form.Field required>
//       <label>New Password</label>
//       <input type ='password'
//       name ='password'
//       onChange={(e) => setPassword(e.target.value)}/>
//     </Form.Field>

//     <Form.Field required>
//       <label>Repeat Password</label>
//       <input type ='password'
//       name ='password2'
//       onChange={(e) => setPassword2(e.target.value)}/>
//     </Form.Field>
      
//       <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setAcceptTerms(!acceptTerms)} />
     

//     <Button name='Register-Submit-Button' type='submit'onClick={sendRegistrationInfoToAPI}>Submit</Button>
//   </Form>
//   </div>
//   </div>