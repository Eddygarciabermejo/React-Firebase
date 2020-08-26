import React from 'react';
import Logo from '../componets/Logo'
import '../assets/styles/container/typeuser.css'
import { Link } from 'react-router-dom';


const Typeuser = () =>{

    return(
        <section>
            <Logo/>
            <div className="div-text">
                <p>Select your user type</p>
            </div>

            <div className="div-button">
                <Link to="/home">
                    <button>
                        Construction Pro 
                    </button>
                </Link>
    
            </div>
            <div className="div-button">
                <Link to="/home">
                <button>
                    Jobs Provider
                </button>
                </Link>
            </div>

            <div className="div-button">
                <a href="homejobs.html">Next ></a>
            </div>
        
        </section>
    )
}

export default Typeuser;