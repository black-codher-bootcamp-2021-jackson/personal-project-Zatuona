import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';



function AllUsersPage() {

const [profiles, setProfiles] = useState([]);

useEffect (() => {axios.get('/api/admin/users')
.then((getProfiles) => {
    //console.log(getProfiles.data);
    setProfiles(getProfiles.data)
})

})
    


const renderProfiles = () => profiles.map((profile) => (   
    <ul>
    
    <li key= {profile.firstName}>

    <p>Username : {profile.username}</p>
    <p>Email : {profile.email}</p>
    <p>Contact Number : {profile.contactNumber}</p>
    <p>Customer ID : {profile.customerId}</p>
    <p>Ping Pong Points : {profile.pingPongPoints}</p>
    <p>Previous Purchases : {profile.transactions}</p>

    </li>



    
    </ul>




))
if (profiles) {renderProfiles()}


    return (
        <> </>
          )

  



}

  
  export default AllUsersPage;
