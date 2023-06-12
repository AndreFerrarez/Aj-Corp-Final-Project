import React from 'react';
import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../infra/firebase';
import Logout from '../users/Logout';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const username = email.split('@')[0];

  if (error) {
    return (
      <div>
        <p>User not found...</p>
      </div>
    );
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    return (
      <>
        <Logout username={username} />
      </>
    );
  }

  return (
    <>
      <form className='login-form'>
        <h3>Login...</h3>
        <label>Email</label> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        <label>Password</label> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <div className='btn-link'>
          <button className='button' onClick={() => signInWithEmailAndPassword(email, password)}> LOGIN </button>
        </div>
        <p className='text'>
          Not registered yet? <Link className='register' to="Register"> Register</Link>
        </p>
      </form>
    </>
  );
}