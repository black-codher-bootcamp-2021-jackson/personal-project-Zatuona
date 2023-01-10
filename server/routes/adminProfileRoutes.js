const mongoose = require("mongoose");
const Admin = mongoose.model("admin")
const Customer = mongoose.model("customer")





const AdminRoutes = (app) => {

//Call up Admin profile

app.get('/api/admin/:employeeId', async (req, res) => {

  const { employeeId } = req.params;

  const Adminprofile = await Admin.findById(employeeId)


return res.status(202).send({
  error: false,
  Adminprofile,
});
});




//--Get a list of all the users and their info (not their passwords though)

    app.get(`/api/admin/users`, async (req, res) => {
      const users = await Customer.find();
  
      return res.status(200).send(users);
    });



//---Using individual user profiles---

//CREATE a new customer profile

app.post('/api/admin/create-profile', async (req, res) => {
    const profile = await Customer.create(req.body);

  return res.status(201).send({
    error: false,
    profile,
  });
});



// GET - To call up an individual user's info

app.get ('/api/admin/users/customer_profile', async (req, res) => {

    const { email } = req.body;
  
   try { const profile = await Customer.find({email: email});
  
    res.status(200).send(
      profile.customerId,
      profile.firstName,
      profile.lastName,
      profile.email,
      profile.contactNumber,
      profile.username,
      profile.pingPongPoints,
      profile.transactions)
  }
  catch (err) {res.status(400).send('User not found')}

  });


 
  

// PUT - To edit an individual user's info via button

app.put(`/api/admin/users/customer_profile/edit`, async (req, res) => {
    const { email } = req.body;

    const profile = await Customer.findOneAndUpdate({email: email}, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });





// DELETE "./admin/user/customer_profile/delete" or username? - To delete an individual user

app.delete(`/api/admin/user/customer_profile/delete`, async (req, res) => {

  
    const { customerId } = req.body;

    const profile = await Customer.findByIdAndDelete({customerId: customerId});

    return res.status(202).send({
      error: false,
      profile,
    });
  });



};

module.exports = AdminRoutes;