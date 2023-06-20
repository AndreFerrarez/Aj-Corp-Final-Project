import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../infra/firebase';
import Logout from '../users/Logout';
import { useAuthState } from 'react-firebase-hooks/auth';
import Users from '../users/Users';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const username = email.split('@')[0];
  
 
  //////////////////////////////////////////////
  // useEffect(() => {
  //   setPersistence(auth, browserSessionPersistence)
  //     .then(() => {
  //       // A persistência de sessão foi ativada
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  /////////////////////////////////////////////
 

  // if (error) {
  //   return (
  //     <div>
  //       <p>User not found...</p>
  //     </div>
  //   );
  // }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (user) {
  //   return (
  //     <>
  //     <Logout username={username} />
  //     <Users />
  //     </>
  //   );
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