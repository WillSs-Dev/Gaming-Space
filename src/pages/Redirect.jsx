import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Redirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/store');
  }, [navigate])
  
  return (
    <></>
  )
}

export default Redirect;
