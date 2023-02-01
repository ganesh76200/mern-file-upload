const { default: mongoose } = require("mongoose");

module.exports = mongoose.model("multiDOc" , mongoose.Schema(
    { userDob: String,
       userAdhar: String,
       userTc : String
    }, 
    {timestamps: true}
    ) )