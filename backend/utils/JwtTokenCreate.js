
import jwt from 'jsonwebtoken'

 export const JwtTokenCreate=(email)=>{
    const token=jwt.sign({email:email},process.env.JWT_SECRET,{expiresIn:'1h'})
    return token

}