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
    res.status(200).json({ message: "user logged in successfully", user ,token });
  } catch (error) {
    console.log(error.message);
  }
};
