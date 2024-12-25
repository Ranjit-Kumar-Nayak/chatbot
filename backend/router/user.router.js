import express from 'express'

import {login, logout, register} from '../controller/user.controller.js'
import { userAuthMiddleware } from '../middlewares/userAuthMiddleware.js';
const router=express.Router();


router.post('/register',register)
router.post('/login',login)
router.get('/logout',logout)


export default router;