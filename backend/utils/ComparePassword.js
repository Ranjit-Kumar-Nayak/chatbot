
import bcrypt from 'bcrypt'


export const comparePassword = (password,userPassword) =>{
    return bcrypt.compareSync(password, userPassword)
}
