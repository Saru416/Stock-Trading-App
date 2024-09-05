import express from 'express'
import {newUser, loginUser, getUserProfile, deleteUser, getUserById, updateUserProfile, getAllUsers} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/admin.js';

const router = express.Router();

router.post('/addUser',newUser);
router.post('/login',loginUser);

//protected routes
router.get('/profile',protect, getUserProfile);
router.get('/:id',protect,getUserById);
router.get('/', protect, admin, getAllUsers);

router.put('/profile',protect,updateUserProfile);

router.delete('/delete',protect,deleteUser);

export default router;