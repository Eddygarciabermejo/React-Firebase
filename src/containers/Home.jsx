import React from 'react';

import '../assets/styles/container/home.css'
import User from '../assets/imagenes/user.jfif'
import History from '../assets/imagenes/historial.png'
import Hero from '../assets/imagenes/hero.jfif'
import Buscar from '../assets/imagenes/buscar.png'
import Pagos from '../assets/imagenes/pagos.png'
import Noticias from '../assets/imagenes/noticias.png'

const Home = () => {

    return(

        <section>
        <header>
            <div>

            </div>
            <div className="div-user">
                <img className="user-img" src={User} alt=""/>
                <div className="user-text">
                    <p className="text-hey">Hey!</p>
                    <p className="text-name" >Joge Pac</p>
                </div>
            </div>

        </header>

        <div className="hero">
            <img className="hero-img" src={Hero} alt=""/>
        </div>

    <section className="icons">
        <div>
            <div className="icon-tab">
                <div>
                    <img className="icon-tab-select" src={History} alt=""/>
                </div>
                <div>
                    <img  className="icon-tab-select" src={Buscar} alt=""/>
                </div>

            </div>
            <div className="icon-tab">
                <div >
                    <img className="icon-tab-select" src={Pagos} alt=""/>
                </div>
                <div>
                    <img className="icon-tab-select" src={Noticias} alt=""/>
                </div>
            </div>
        </div>
    </section>
           


        <div className="layout">
            <div className="navigation1">Home</div>
            <div className="navigation">Your Site</div>
            <div className="navigation"> Deals</div>
            <div className="navigation4">Help</div>
        </div>
    </section>
    )

}

export default Home;