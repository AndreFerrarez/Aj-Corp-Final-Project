import React, { useState } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../../infra/firebase';


const Logout = ({ username }) => {
  const [signOut] = useSignOut(auth);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleLogout = () => {
    signOut();
    setIsLoggedOut(true);
    
    alert("User logged out.")
    // window.location.reload(); // Refresh the page
  };

  if(isLoggedOut) {
    return window.location.reload();
  }

  return (
    <div className='btn-link'>
      <p>Hello, {username}</p>
      <button className='button' onClick={handleLogout}>
        LOGOUT
      </button>
      
    </div>
  );
};

export default Logout;