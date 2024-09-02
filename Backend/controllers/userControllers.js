import { User } from '../models/users.models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register a new User
export const newUser = async (req,res) => {
    const {name,email,password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({message: "All diels are required"})
    }

    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "Email already exists" });
        }

        // Hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        
        const user = User({
            name,
            email,
            password: hashedPassword,
        })

        
        await user.save();
        res.status(201).json({message: "User Added"})  ;
    }
    catch(error){
        res.status(500).json({message: "Server Error!"});
    }
}

// Login with existing user
export const loginUser = async (req,res) => {
    const {email,password} = req.body

    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message: "Invalid Login or Password"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message: "InValid Password"});
        }

        const token = jwt.sign(
            {id: user.id,  email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );

        res.status(200).json({token})
    }
    catch(error){
        res.status(500).json({message: "Server Error!"})
    }
}

// Get user profile
export const getUserProfile = async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: "Server Error!"});
    }
}

// Delete User Profile
export const deleteUser = async (req,res) => {
    try{

        const user = await User.findById(req.user.id);

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        await user.remove();
        res.status(200).json({message: "User delected"});
    } catch(error){
        res.status(500).json({message: "Server Error!"});
    }
}

// Get user by using id
export const getUserById = async (req,res) => {
    try{
        const user = await User.findById(req.params.id).select('-password');

        if(!user){
            return res.status(404).json({message: "User not found"});
        }

        res.status(200).json(user);
    } catch(error){
        res.status(500).json({message: "Server Error!"});
    }
}