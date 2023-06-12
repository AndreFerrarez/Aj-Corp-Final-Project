import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../login/Login.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../infra/firebase';


export default function Register() {



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const username = email.split('@',)[0];

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return (
            <div>
                <p>Welcome to Aj Capital: {name}</p>
            </div>
        );
    }





    return (
        <div>
            <div className="login-form">
            <label>Name <br /> </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Email <br /> </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password <br /> </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Re-Password <br /> </label>
                <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                />

                <div className='btn-link'>
                    <button className='button' onClick={() => createUserWithEmailAndPassword(email, password, rePassword)}>
                        Register
                    </button>
                </div>
                <p className='text'>Alredy have an Account?
                    <Link className='register' to="/"> Login</Link>
                </p>

            </div>


        </div>



    )
}
