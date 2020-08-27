import React, { useState } from 'react';

import { Firebase } from '../Firebase';

import '../assets/styles/container/signup.css'
import Logo from '../componets/Logo'

const SignUp = (props) => {

    const [form, setValues] = useState({
        EMAIL: '',
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handlSubmit = (event) => {
        event.preventDefault(); //quitar el defecto del comportamiento de un formulario
        Firebase.prototype.createUserWithEmailAndPassword(form, 'https://bidder-712c3.firebaseapp.com')
            .then(() => {
                console.log('formulario registrado con exito.')
                props.history.push('/languaje');// rediriges a la pagina que quiero que se muestre si el formulario fue efectivo.
            })
            .catch(() => {
                console.log('algo salio mal')
            })
        // Ejecutar el registro de auth para usuerio
    };

    const LoginGoogle = () => {
        Firebase.prototype.loginGoogle()
            .then((res) => {
                props.history.push('/languaje')
            })
            .catch((e) => console.log(e))
    }
    const LoginFacebook = () => {
        Firebase.prototype.loginFacebook()
            .then((res) => {
                props.history.push('/languaje')
            })
            .catch((e) => console.log(e))
    }
    return (

        <section className="section-sign">
            <Logo />
            <form onSubmit={handlSubmit}>
                <div className="div-inputssing">
                    <div className="div-spansigsig">
                        <span className="labelsing">Name:</span>
                    </div>
                    <input type="text" name="name" id="" onChange={handleInput} required/>
                </div>
                <div className="div-inputssing">
                    <div className="div-spansigsig">
                        <span className="labelsing">E-mail:</span>
                    </div>
                    <input type="email" name="EMAIL" id="" onChange={handleInput} required/>
                </div>
                <div className="div-inputssing">
                    <div className="div-spansig">
                        <span className="labelsing">Password:</span>
                    </div>
                    <input minLength='6' type="password" name="PASSWORD" id="" onChange={handleInput} required />
                </div>
                <div className="div-inputssing">
                    <div className="div-spansig">
                        <span className="labelsing">Repeat Password:</span>
                    </div>
                    <input minLength='6' type="password" name="" id="" onChange={handleInput} required />
                </div>
                <div className="div-inputssing">
                    <div className="div-spansig">
                        <span className="labelsing">Mobile Number:</span>
                    </div>
                    <input type="text" name="" id="" onChange={handleInput} />
                </div>
                <div className="div-inputssing">
                    <div className="div-spansig">
                        <span className="labelsing">City:</span>
                    </div>
                    <select className="selectsign" name="select" onChange={handleInput}>
                        <option value="value1">Los Angeles</option>
                        <option value="value2" >Miami</option>
                        <option value="value3">Florida</option>
                    </select>
                </div>
                <div className="div-button">
                    <button type="submit">Next </button>
                </div>
            </form>
            <button type='button' onClick={() => LoginGoogle()}>Google</button>
            <button type='button' onClick={() => LoginFacebook()}>Facebook</button>
        </section>
    )
}

export default SignUp;
