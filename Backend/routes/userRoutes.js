import express from 'express'
import {newUser} from '../controllers/userControllers.js'
const router = express.Router();

router.post('/addUser',newUser);

export default router;