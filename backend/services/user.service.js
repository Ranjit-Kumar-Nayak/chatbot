import User from "../models/user.models.js";
import { comparePassword } from "../utils/ComparePassword.js";

import {hashPassword} from '../utils/hashPassword.js'
import { JwtTokenCreate } from "../utils/JwtTokenCreate.js";



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
export const loginUser=async({email,password})=>{
  
    
    try {
        if(!email || !password){
            throw new Error('Please provide email and password')
        }
        const user=await User.findOne({email}).select('+password');

        
        if(!user){
            throw new Error('Invalid email or password....')
        }
        const isMatch= comparePassword(password,user.password);
        
        

        if(!isMatch){
            throw new Error('Invalid email or password!!!!!!')
        }
        const token =JwtTokenCreate(email)
        if(!token){
            throw new Error('Failed to generate token****')
        }
     
        return {token:token,user:user} 
    } catch (error) {
        console.log(error.message);
        
    }
}