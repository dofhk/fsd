const mongoose=require('mongoose');module.exports=async()=>{try{await mongoose.connect(process.env.CONNECTION_STRING);console.log('database connected')}catch(e){console.log(e)}};
