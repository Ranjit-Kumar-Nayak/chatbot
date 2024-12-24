import mongoose from 'mongoose'


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:[6,'Email must be atleast 6 chatacter'],
        maxLength:[60,'Email must be not longer than 60 chatacter']
    },
    password:{
        type:String,
        required:true,
        minLength:[8,'Password must be atleast 8 chatacter'],
        maxLength:[255,'Password must be not longer than 255 chatacter'],
        select:false
    }   
},{timestamps:true})

const User=mongoose.model('User',userSchema)

export default User;