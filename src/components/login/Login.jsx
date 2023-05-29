import React from 'react';
import './Login.css';

const Login = () => {

  
    const Register = () => { alert("register page") }
  



  return (
    <>
      <form className='login-form'>
        <h3>Login </h3>
        <label>
          Email <br />
          <input type="text" name="email" placeholder='Email' required />
          <br /><br />
        </label>
        <label>
          Password <br />
          <input type="password" name="password" placeholder='Password' required />
        </label>
        <br /><br />
        <div className='btn-link'>
          <button type="submit" value="Submit"> LOGIN </button>
          <p>Not Register yet? 
            <a className='register' onClick={Register} type='text'>Register...</a>
          </p>
        </div>
      </form>
    </>
  )
}

export default Login


