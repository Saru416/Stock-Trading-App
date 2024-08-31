import { User } from '../models/users.models.js';
import bcrypt from 'bcryptjs';

export const newUser = async (req,res) => {
    const {name,email,password} = req.body

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        
        const user = User({
            name,
            email,
            password: hashedPassword,
        })

        if(!name || !email || !password){
            return res.status(400).json({message: "All diels are required"})
        }
        await user.save();
        res.status(201).json({message: "User Added"})  ;
    }
    catch(error){
        res.status(500).json({message: "Server Error!"});
    }
}