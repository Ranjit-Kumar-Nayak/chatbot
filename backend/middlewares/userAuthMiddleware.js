import jwt from "jsonwebtoken";

export const userAuthMiddleware = async (req,res,next) => {
  try {
    // const token = req.cookie.authToken || req.headers.authorization?.split(" ")[1];
    const token = req.cookies.authToken || (req.headers.authorization && req.headers.authorization.split(' ')[1]);
    if (!token) {
      return res.status(401).send({ err: "Unauthorized user" });
    }
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Not authorized" });
  }
};
