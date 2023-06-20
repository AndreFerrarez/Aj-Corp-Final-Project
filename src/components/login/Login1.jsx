import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logarSistema from "../../infra/Usuarios";
import './Login1.css';



export default function Login() {
    const [login, setLogin] = useState({ email: "", senha: "", token: "" });

    useEffect (() => {
        if (login.token.length> 0) {
            alert(login.token);
        }
    }, [login]);


    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setLogin((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        logarSistema(login, setLogin);
    }

    return (
        <div className="login-container ">
            <h3>Login...</h3>
            <form className='form'>
                <label htmlFor="email">Email</label> <br />
                <input type="email" name="email" value={login.email} onChange={handleChange} />
                <br /><br />

                <label htmlFor="senha">Password</label> <br />
                <input type="password" name="senha" value={login.senha} onChange={handleChange}  />
                <br /><br />
                <div className='btn-link'>
                    <input type="submit" value="Entrar"  disabled={login.email.length === 0 || login.senha.length === 0} onClick={handleLogin}/>
                </div>
                <p className='text'>
                    Not registered yet? <Link className='register' to="Register"> Register</Link>
                </p>
            </form>
        </div>
    )

}