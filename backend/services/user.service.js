import User from "../models/user.models.js";

import {hashPassword} from '../utils/hashPassword.js'



export const registerUser=async({email,password})=>{
    try {
        if(!email || !password){
            throw new Error('Please provide email and password')
        }
        const existingUser=await User.findOne({email})
        if(existingUser){
            throw new Error('Email already exists')
        }
        const hashedPassword=await hashPassword(password);
        const user=User.create({email,password:hashedPassword});
        return user;
    } catch (error) {
        console.log(error.message);
        
    }
}