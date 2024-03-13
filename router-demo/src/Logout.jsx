import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({handleLogout}) => {

    let navigate = useNavigate();
    
    useEffect(() => {

      handleLogout();
      navigate('/login')

         }, [])
    
  return (
    <div></div>
  )
}

export default Logout


