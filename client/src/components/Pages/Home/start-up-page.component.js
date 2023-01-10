 import React from 'react';
 //import { Link } from 'react-router-dom';
 import './home.css';
 //import axios from 'axios';
import HSExtra_Logo from './HSExtra_Logo.png';




function Homepage () {
   return (


<div class="homepage-Frame">
{/* <div class="center"> */}

<div class="Welcome-section">

<img class="HomePageLogo" alt="" src={HSExtra_Logo}/>



      <h1 class='HomePageTitle'>Introducing <br></br> Hot Shot Extra</h1>

      <div class="gif-images">
       <img class='backgroundgif' src={require ("./giffys.gif")}  alt="is this link broken?"/>
    </div>

    <h2 class="homepage-h2">What is it?</h2>
      <p class="Homepage-subheading">Get rewarded for having fun and earn Ping Pong Points (PPP) towards having even more fun! </p>
       <br></br>
      <p class="homepage-main-text"> Hot Shot Extra helps you to keep track of Ping Pong Points you've earnt from previous purchases. These points can then be used towards the following:
      <br></br>
      <ul class="homepage-list">    
         <li> Payment of table tennis and pool games </li>
         <li> Purchase of food and drinks </li>
         <li> Reservation of tables, VIP and more </li>
      </ul>
      </p>

      <h2 class="homepage-letsget-h2">Let's get started!</h2>




   
</div>












 {/* <div class="profile"> */}

   
    
    {/* <div class="greeting">Hey</div>
    <div class="username">Username</div>
    

       <div class="points-div">
           <p>YOU HAVE</p>
           <p>X</p>
           <p>PING PONG POINTS</p>
       
       </div> */}



       {/* BUTTONS */}
    <div class="actions">
    <form action="/login">
    <button class="homepage-login-btn"> Log In</button>
   </form>


    <form action="/sign-up">

       <button class="signup-btn">Sign Up</button>

   </form>
    </div>
 </div>
 

// </div>
// </div>








   )

}


export default Homepage;