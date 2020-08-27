import React, { useState } from 'react';
import { Firebase } from '../Firebase';
import '../assets/styles/container/login.css'
import Face from '../assets/imagenes/facebook.png'
import Logo from '../componets/Logo'
import { Link } from 'react-router-dom';

const Login = (props) => {
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
        Firebase.prototype.loginMail(form)
            .then(() => {
                console.log('formulario registrado con exito.')
                props.history.push('/home');// rediriges a la pagina que quiero que se muestre si el formulario fue efectivo.
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
        <section className="mainLogin">
            <Logo />
            <form onSubmit={handlSubmit}>
                <div className="div-inputs-login">
                    <div className="div-span-login">
                        <span className="labelsapan">E-mail:</span>
                    </div>
                    <input type="text" name="EMAIL" id="" onChange={handleInput} />
                </div>

                <div class="div-inputs-login">
                    <div className="div-span-login">
                        <span className="labelsapan">Password:</span>
                    </div>
                    <input minLength='6' type="password" name="PASSWORD" id="" onChange={handleInput} />
                </div>
                <div className="div-button-login">
                    <button type='submit' className="button-login">
                        Login
                </button>
                </div>
            </form>

            <button className="div-face-login" onClick={() => LoginFacebook()}>
                <img className="img-face" src={Face} alt="" />
            </button>
            <button type='button' onClick={() => LoginGoogle()}>Google</button>


            <div>
                <div className="div-recover">
                    <Link to="/recover">
                        Did you forget your password
                    </Link>
                </div>

                <div className="sign">
                    <Link className="sign-login" to="/sign">
                        Sign up</Link>
                </div>
            </div>
        </section>

    )
}

export default Login;