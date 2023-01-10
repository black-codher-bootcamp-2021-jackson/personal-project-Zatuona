import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import 'semantic-ui-css/semantic.min.css'

// // //import "bootstrap/dist/css/bootstrap.min.css"




import Homepage from "./components/Pages/Home/start-up-page.component";
import RegisterPage from "./components/Pages/SignUp/sign-up-page.component";
import LoginPage from "./components/Pages/Login/login.component";
import CustomerLogin from "./components/Pages/CustomerLogin/login-customer.component";
import AdminLogin from "./components/Pages/AdminLogin/login-admin.component";
import UserPage from "./components/Pages/UserPage/ind-user-page.component";
// import UserPoints from "./components/Pages/UserPoints/ind-user-points.component";
// import UserPurchases from "./components/Pages/UserPurchases/ind-user-purchases.component";
import AllUsersPage from "./components/Pages/AllUsers/all-profiles.component";
import AdminPage from "./components/Pages/AdminPage/admin-page.component";




// // SERVICES THAT CALL OUR API ENDPOINTS
// //import { getAllProfiles } from "./services/profileService";



function App() {
  return (
    <Router>
      <Routes>

         <Route exact path="/" element= {<Homepage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/admin/create-profile" element={<RegisterPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/login/customer" element={<CustomerLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />

        <Route path="/admin/users" element={<AllUsersPage />} />
        <Route path="/admin/:employeeId" element={<AdminPage />} />
        <Route path="/user/:customerId" element={<UserPage />} />
        <Route path="/admin/users/customer_profile" element={<UserPage />} />
         {/*<Route path="/user/:customerId/ppp" element={<UserPoints />} />
        <Route path="/admin/user/:customerId/ppp" element={<UserPoints />} />
        <Route path="/user/:customerId/prev-purchases" element={<UserPurchases />} />
        <Route path="/admin/user/:customerId/prev-purchases" element={<UserPurchases />} /> */}

      </Routes>
    </Router>
  );

}

export default App;
   

