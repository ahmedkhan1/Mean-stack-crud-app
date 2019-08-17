const mongoose = require('mongoose');

const server    = "localhost:27017";
const database  = "country";

mongoose.connect(`mongodb://${server}/${database}`,{ useNewUrlParser: true },(err,db)=>{
    if(!err){
        console.log('MongoDB connection Succeeded');
        
    }else{
        console.log('Error in DB connection '+JSON.stringify(err, undefined, 2)); //COnvert Err object into string with 2 string space
    }
});
 
module.exports = mongoose;

