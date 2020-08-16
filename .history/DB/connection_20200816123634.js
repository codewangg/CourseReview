const mongoose = require('mongoose');


const uri = "mongodb+srv://new-user:Apple123@cluster0.s1pg2.mongodb.net/test0?retryWrites=true&w=majority";

const connectDB = async()=>{
    await mongoose.connect(uri);
    console.log('db connected...');
}

module.exports = connectDB;
