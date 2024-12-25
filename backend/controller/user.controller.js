import { loginUser, registerUser } from "../services/user.service.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res
      .status(201)
      .json({ message: "user successfully registered", user: user });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  try {
    const {token,user} = await loginUser(req.body);
    res.cookie('authToken',token,{
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      httpOnly: true, // prevent client site request
      secure: true,
      sameSite: 'strict' // prevent CSRF attack
  })
    res.status(200).json({ message: "user logged in successfully", user ,token });
  } catch (error) {
    console.log(error.message);
  }
};


export const logout=async (req,res)=>{
  try {

    // const token = req.cookies.authToken || req.headers.authorization.split(' ')[ 1 ];
    const token = req.cookies.authToken || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    // redisClient.set(token, 'logout', 'EX', 60 * 60 * 24);

    res.status(200).json({
        message: 'Logged out successfully'
    });


} catch (err) {
    console.log(err);
    res.status(400).send(err.message);
}
}
