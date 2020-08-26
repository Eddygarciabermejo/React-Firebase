import React from 'react';
import Logo from '../assets/imagenes/logo.png'

import '../assets/styles/container/languaje.css'

const Languaje = () => {

    return(

        <section>
        <div className="div-img">
            <img className="img-logo" src={Logo} alt=""/>
        </div>
        <div className="div-text">
            <p>Select your language</p>
        </div>
        <div className="div-button">
            <button className="buttonlang">Spanish</button>
            
        </div>
        <div className="div-button">
            <button className="buttonlang">
                English</button>
        </div>

        <div className="div-button">
            <a href="login.html">Next></a>
        </div>
    </section>
    )
}

export default Languaje;