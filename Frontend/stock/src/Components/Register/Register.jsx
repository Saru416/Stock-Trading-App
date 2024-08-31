import React from 'react'
import './Register.css'
import '../../App.css'
import {Link} from 'react-router-dom'

import video from '../../LoginAssets/video.mp4'
import image from '../../LoginAssets/photo.png'

import {FaUserShield} from 'react-icons/fa'
import {MdMarkEmailRead} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'

const Register = () => {
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

                <form action="" className='form grid'>
                    <div className='inputDiv'>
                        <label htmlFor='email'>Email</label>
                        <div className='input flex'>
                            <MdMarkEmailRead className="icon"/>
                            <input type="email" id="email" placeholder='Enter Email'></input>
                        </div>
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor='username'>Username</label>
                        <div className='input flex'>
                            <FaUserShield className="icon"/>
                            <input type="username" id="username" placeholder='Enter Username'></input>
                        </div>
                    </div>

                    <div className='inputDiv'>
                        <label htmlFor='password'>Password</label>
                        <div className='input flex'>
                            <BsFillShieldLockFill className="icon"/>
                            <input type="password" id="password" placeholder='Enter Password'></input>
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
