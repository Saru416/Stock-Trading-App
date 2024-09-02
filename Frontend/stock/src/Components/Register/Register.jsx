import React, {useState} from 'react'
import './Register.css'
import '../../App.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

import video from '../../LoginAssets/video.mp4'
import image from '../../LoginAssets/photo.png'

import {FaUserShield} from 'react-icons/fa'
import {MdMarkEmailRead} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const response  = await axios.post('http://localhost:3000/api/users/addUser', formData);
            console.log(response.data);
        }
        catch(error){
            console.log(error.response.data);
        }
    }


  return (
    <div className='registerPage flex'>
        <div className='container flex'>
            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>
                <div className='textDiv'>
                    <h2 className='title'>Create And sell Extraordinary Products</h2>
                    <p>Adopt the peace of nature!</p>
                </div>

                <div className='footerDiv flex'>
                <span className='text'>Have an account</span>
                <Link to={'/'}>
                <button className='btn'>Login</button>
                </Link>
                </div>
            </div>

            <div className='formDiv flex'>
                <div className='headerDiv'>
                    <img src={image} alt="Logo Image"></img>
                    <h3>Let us know you!</h3>
                </div>

                <form onSubmit={onSubmit} action="" className='form grid'>
                    <div className='inputDiv'>
                        <label htmlFor='email'>Email</label>
                        <div className='input flex'>
                            <MdMarkEmailRead className="icon"/>
                            <input name="email" value={email} type="email" id="email" placeholder='Enter Email' onChange={onChange} required></input>
                        </div>
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor='username'>Username</label>
                        <div className='input flex'>
                            <FaUserShield className="icon"/>
                            <input name="name" value={name} type="username" id="username" placeholder='Enter Username' onChange={onChange} required></input>
                        </div>
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor='password'>Password</label>
                        <div className='input flex'>
                            <BsFillShieldLockFill className="icon"/>
                            <input name="password" value={password} type="password" id="password" placeholder='Enter Password' onChange={onChange} required></input>
                        </div>
                    </div>

                    <button type="submit" className='btn flex'>
                        <span>Register</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>

                    <span className='forgetPassword'>
                        Forget your password? <a href="">Click Here</a>
                    </span>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
