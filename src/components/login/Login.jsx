import React from 'react'

const Login = () => {
  return (
    <>
    
    
        <form>
            <h3>Login </h3>          
            <label>
                Email <br/>
                <input type="text" name="email" required/>
                <br/><br/>
            </label>
            <label>
                Password <br/>
                <input type="password" name="password" required/>
            </label>
            <br/><br/>
            <input type="submit" value="Submit" />
            
            
        </form>
    </>
  )
}

export default Login


