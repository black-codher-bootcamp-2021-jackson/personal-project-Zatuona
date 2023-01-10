// GET  /logout   // destroys session and redirects to /
// GET  /login    // gets the webpage that has the login form
// POST /login    // authenticates credentials against database and either redirects home with a new session or redirects back to /login
// GET  /register // gets the webpage that has the registration form
// POST /register // records the entered information into database as a new /user/xxx
// GET  /user/xxx // gets and renders current user data in a profile view
// POST /user/xxx // updates new information about user

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { uuidv4 } = require('uuid');

const mongoose = require("mongoose");

const Customer = mongoose.model("customer")






const signUpRoutes = (app) => {


//Generate Token
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}



// Submit the details and create a new profile

    app.post('/api/sign-up', async (req, res) => {

        const { firstName, lastName, email, contactNumber, username, password, acceptTerms } = req.body
      
        if (!firstName || !lastName || !email || !contactNumber || !username || !password ||  acceptTerms) {
          res.status(400).send('Please add all fields')
        }
      
        // Check if user exists
        const userAlreadyExists = await Customer.findOne({ email })
      
        if (userAlreadyExists) {
          res.status(400).send('User already exists')
        }


        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
      
        // Create user

        const user = await Customer.create({
          firstName,
          lastName, 
          email, 
          contactNumber, 
          username, 
          password: hashedPassword,

          acceptTerms: true,
          rememberMe: '',
          createdOnDate: Date.now(),
          customerId: uuidv4(),
          image: '',
          pingPongPoints: '',
          transactions: '',
          isAdmin: false,
          
        })


         if (user) {

          //Allocate token to user
        return res.json({token: generateToken(user.customerId)})}
          
        else {res.status(400).send('Sorry, the credentials do not match')}

  
 });

} 

module.exports = signUpRoutes;