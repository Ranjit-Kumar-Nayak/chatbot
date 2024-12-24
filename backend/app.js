import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import userRoute from './router/user.router.js'
const app=express();

app.use(express.json())
app.use(cookieParser());
app.use(cors({}))


// routes
app.use('/api/v1/users',userRoute)

export default app;