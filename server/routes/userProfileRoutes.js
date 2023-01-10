const mongoose = require("mongoose");
const Customer = mongoose.model("customer");





const userProfileRoutes = (app) => {


//PULL UP USER'S OWN PROFILE USING CUSTOMER ID -- NEEDS TO BE ENCRYPTED

//Should be directed here after signing in

app.get ('/api/user/:customerId', async (req, res) => {

  const { customerId } = req.params;

  const profile = await Customer.findById(customerId)


return res.status(202).send({
  error: false,
  profile,
});
});


//See how many points user has by clicking "Mypoints" button on profile
app.get('/api/user/:customerId/ppp', async (req, res) => {

  const { customerId } = req.params;

  try {
    const profile = await Customer.findById(customerId)

    res.status(200).send(profile.pingPongPoints)
  }
  catch (err) {res.status(400).send('Invalid request')}


});



//See previous receipts and purchases by clicking "My transactions" button on profile

app.get('/api/user/:customerId/prev-purchases', async (req, res) => {


const { customerId } = req.params;


try {
  const profile = await Customer.findById(customerId)

  res.status(200).send(profile.transactions)
}
catch (err) {res.status(400).send('Invalid request')}


});



//UPDATE info on the page  button to bring up modal

app.put(`/api/user/:customerId`, async (req, res) => {
    const { customerId } = req.params;


    

    const profile = await Customer.findByIdAndUpdate(customerId, req.body);

    return res.status(202).send({
      error: false,
      profile,
    });
  });







//DELETE User profile - click on 'delete button' on profile

app.delete(`/api/user/:customerId`, async (req, res) => {
    const { customerId } = req.params;

    const profile = await Customer.findBycustomerIdAndDelete(customerId);

    return res.status(202).send({
      error: false,
      profile,
    });
  });


  
}

module.exports = userProfileRoutes;
















