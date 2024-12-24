import { registerUser } from "../services/user.service.js";

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
