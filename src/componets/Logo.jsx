import React from 'react';

import Icon from '../assets/imagenes/logo.png'
import '../assets/styles/componets/logo.css'

const Logo = () => {

    return(
        <section className="section-logo">
             <div className="div-img-logo">
                <img className="logo" src={Icon} alt=""/>
            </div>
        </section>

       
    )
}

export default Logo;