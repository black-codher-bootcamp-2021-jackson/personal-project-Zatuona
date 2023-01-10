import axios from "axios";


const postSignUp = async () => {
    const response = await axios.post(`/api/sign-up`);
  
    return response.data || [];
  };




// All of the endpoints in this file can be exported below
export {postSignUp};