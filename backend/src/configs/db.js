const {mongoose} = require ("mongoose")
require("dotenv").config();

const mongoUrl = process.env.MONGOURL;
// Connect to MongoDB
const connectToDB = ()=>{
    mongoose.connect(mongoUrl);
      console.log("database is connected..")
    
}
   
  module.exports = connectToDB;