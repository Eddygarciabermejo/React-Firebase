import React from 'react';

import '../assets/styles/container/login.css'
import Face from '../assets/imagenes/facebook.png'
import Logo from '../componets/Logo'

const Login = () => {

    return(
        <section className="mainLogin">
            <Logo/>
            <div className="div-inputs-login">
                <div className="div-span-login">   
                    <span className="labelsapan">E-mail:</span>
                </div>
                <input type="text" name="" id="" />
            </div>

            <div class="div-inputs-login">
                <div className="div-span-login">   
                    <span className="labelsapan">Password:</span>
                </div>
                <input type="text" name="" id="" />
            </div>

            <div className="div-face-login" >
                <img className="img-face" src={Face} alt=""/>
            </div>

            <div className="div-button-login">
                <button className="button-login">
                    Login
                </button>
            </div>
            <div>
                <div className="div-recover">
                    <a href="recover.html">
                        Did you forget your password
                    </a>
                </div>
            
                <div className="sign">
                    <a className="sign-login" href="signup.html">
                        Sign up</a>
                </div>
            </div>
    </section>

    )
}

export default Login;