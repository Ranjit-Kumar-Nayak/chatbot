import app from "./app.js";
import http from 'http'
import dotenv from 'dotenv'
import { dbConnect } from "./database/db.js";
dotenv.config({})
dbConnect()
const port = process.env.PORT || 5000;

const server = http.createServer(app);



server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});