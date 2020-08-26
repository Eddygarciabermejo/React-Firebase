import React from 'react';
import Logo from '../componets/Logo'
import '../assets/styles/container/recover.css'

const Recover = () =>{
    return(
        <section className="main">
            <Logo/>
        <div className="div-inputs">
            <div className="div-span">   
                <span>Enter your E-mail</span>
            </div>
            <div className="div-input-recover">
                <input type="text" name="" id=""/>
            </div>
        </div>
        <div className="div-button">
            <button>
                Recover Password
            </button>
        </div>
    </section>
    )
}

export default Recover;