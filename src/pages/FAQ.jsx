import { Paper } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Header, Footer } from '../components';

function FAQ() {
  const navigate = useNavigate();

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

  }, [navigate]);
  
  return (
    <Paper>
      <Header />
      <Footer />
    </Paper>
  )
}

export default FAQ;
