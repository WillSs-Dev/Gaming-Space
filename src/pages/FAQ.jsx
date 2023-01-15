import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
} from '@mui/material';
import React, { useEffect } from 'react';
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
    <Paper
      sx={{
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 50%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 120%)',
      }}>
      <Header />
      <Accordion sx={{ maxWidth: '50%' }}>
        <AccordionSummary>Test</AccordionSummary>
        <AccordionDetails>Good test!</AccordionDetails>
      </Accordion>
      <Footer />
    </Paper>
  );
}

export default FAQ;
