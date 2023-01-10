import React from 'react';
import orange_customer_logo from './orange_customer_logo.png';
import orange_admin_logo from './orange_admin_logo.png';
import HSExtra_Logo from './HSExtra_Logo.png';
import "./Login.css";






function LoginPage () {

  return (


<div class="frame">

<div class="white-pg-content-box"> 
      
      <div class= "LoginPageHeader">
      <img class="LoginPageLogo" alt="" src={HSExtra_Logo}/>
      <h1 class='LoginPageTitle'>LOG IN</h1>
      </div>

<div class="child">
<a href='/login/customer'>
<img class="Logincustomerlogo" alt="" src={orange_customer_logo}/>
</a>
<p class="grid-custicon-text">I'm a customer</p>

{/* <div class="child"> */}
<a href='/login/admin'>
<img class="Loginadminlogo" alt="" src={orange_admin_logo}/>
</a>
<p class="grid-admicon-text">I'm an admin</p>

</div>


<form action="/">

       <button class="Home-btn">Go back</button>

   </form>


</div>



</div>


  )

    }

    export default LoginPage;