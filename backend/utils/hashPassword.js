import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  try {
    const hashedPassword = bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.log(error.message);
  }
};
