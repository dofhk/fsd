const mongoose=require('mongoose');module.exports=async()=>{try{await mongoose.connect(process.env.CONNECTION_STRING);console.log('Database connected')}catch(e){console.log(e)}};
