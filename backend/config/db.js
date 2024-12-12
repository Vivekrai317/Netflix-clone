import mongoose from 'mongoose';
import { ENV_VARS } from './envVars.js';

export const connectDB = async()=>{
    try{
        await mongoose.connect(ENV_VARS.MONGO_URI);
        console.log('MongoDB connected');
        
    }catch(err){
        process.exit(1); // 1 means failure
        console.log(err);
    }
}