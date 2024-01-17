import mongoose from 'mongoose';

export const Connection= async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.hgjoave.mongodb.net/`;
    
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,
        useNewUrlParser:true});
        console.log('Database connected successfully');
    }
    catch(e){
        console.log("mongo nahi");
    }
}
export default Connection;