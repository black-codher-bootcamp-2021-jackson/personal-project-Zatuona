const mongoose = require("mongoose");
const { Schema } = mongoose;


const adminProfileSchema = new Schema ({

    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    storeId: {type: String},
    employeeId: {type: String},
    password: {type: String},
    createdOnDate: {type: String},
    isAdmin: {type: Boolean, default: true},

})

mongoose.model("admin", adminProfileSchema);