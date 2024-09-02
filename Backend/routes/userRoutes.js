import express from 'express'
import {newUser, loginUser, getUserProfile, deleteUser, getUserById} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addUser',newUser);
router.post('/login',loginUser);

//protected routes
router.delete('/delete',protect,deleteUser);
router.get('/profile',protect, getUserProfile);
router.get('/:id',protect,getUserById);

export default router;