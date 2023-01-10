const mongoose = require("mongoose");
const { Schema } = mongoose;


const userProfileSchema = new Schema ({

    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    contactNumber : {type: Number},
    username: {type: String},
    password: {type: String},
    acceptedTerms: {type: Boolean},
    rememberMe: {type: Boolean},
    dateCreated: {type: String},
    customerId: {type: String}, //uuidv4
    image: {type: String},
    //qrCode: String,
    pingPongPoints: {type: Number},
    transactions: {
        ref: {type: String},
        date: {type: Date},
        total: {type: Number}
    },
    isAdmin: {type: Boolean, default: false}



})

//
mongoose.model("customer", userProfileSchema);