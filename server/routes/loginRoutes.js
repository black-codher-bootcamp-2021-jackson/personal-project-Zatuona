const mongoose = require("mongoose");
const Customer = mongoose.model("customer");
const Admin = mongoose.model("admin")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const loginRoutes = (app) => {


  //Generate JWT
    
  const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
  }


// POST ./login/user -- Asks for and submits the email and password

app.post('/api/login/customer', async (req, res) => {
  
  const { email, password } = req.body

  
    // Check for user email
    const user = await Customer.findOne({ email })

    if (!email || !password) {
      return res.status(400).send('Sorry, please fill in all fields')
    }
  
    if (user && (await bcrypt.compare(password, user.password))) {
      return res.json({token: generateToken(user.customerId)})}
          
      else {res.status(400).send('Sorry, the credentials do not match')};
      
      

    });

//How do we make it automatically go to their profile page?

    


// POST ./login/admin -- Asks for and submits the worker's id and password


  app.post('/api/login/admin', async (req, res) => {
  
    const { employeeId, password } = req.body
  
    
      // Login using employee Id and generate a token
      const user = await Admin.findOne({ employeeId })
    
      if (user && (await bcrypt.compare(password, user.password))) {

        return res.json({token: generateToken(user.employeeId)})}
          
        else {res.status(400).send('Sorry, the credentials do not match')};

      });

    
    };

 module.exports = loginRoutes;


    