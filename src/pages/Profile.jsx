import React, { useEffect, useState } from 'react';
import {
  Header,
  ProfileInfo,
  Footer,
  ReviewsList,
  GamesList,
} from '../components';
import { Paper, Typography } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectGamesInLibrary } from '../redux/reducers/libraryReducer';
import { selectUserReviews } from '../redux/reducers/reviewSlice';

function Profile() {
  const [gamesInLibrary, setGamesInLibrary] = useState([]);
  const [reviews, setReviews] = useState([]);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const { games } = useSelector(selectGamesInLibrary);
  const { userReviews } = useSelector(selectUserReviews);

  useEffect(() => {
    const userIsLogged = JSON.parse(localStorage.getItem('login'));

    if (!userIsLogged) {
      return navigate('/login');
    }

    setGamesInLibrary(games);
    setReviews(userReviews);
  }, [navigate, games, userReviews]);

  return (
    <Paper
      sx={{
        background:
          'linear-gradient(-120deg, rgba(4,0,30,1) 0%, rgba(11,15,46,1) 15%, rgba(20,28,93,1) 75%, rgba(2,106,208,1) 120%)',
      }}>
      <Header />
      <ProfileInfo mobile={mobile} />
      <Typography
        variant='h4'
        my={3}
        align='center'
        sx={{ fontFamily: 'Righteous' }}>
        Games in Library:
      </Typography>
      <hr style={{ maxWidth: '20vW' }} />
      {gamesInLibrary.length ? (
        <GamesList games={gamesInLibrary} />
      ) : (
        <Paper
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
          }}>
          <Typography
            sx={{ mx: 'auto', my: 4 }}
            variant='h5'
            fontFamily='Righteous'>
            No games here yet 😕
          </Typography>
        </Paper>
      )}
      <hr style={{ maxWidth: '78vW' }} />
      <Typography
        variant='h4'
        align='center'
        sx={{ fontFamily: 'Righteous', my: 3 }}>
        Your Reviews:
      </Typography>
      <hr style={{ maxWidth: '20vW' }} />
      {reviews.length ? (
        <Paper sx={{
          backgroundColor: 'transparent',
          width: 'fit-content',
          m: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <ReviewsList mobile={mobile} reviews={reviews} />
        </Paper>
      ) : (
        <Paper
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
          }}>
          <Typography
            sx={{ mx: 'auto', my: 4 }}
            variant='h5'
            fontFamily='Righteous'>
            No reviews here yet 😕
          </Typography>
        </Paper>
      )}
      <hr style={{ maxWidth: '78vW' }} />
      <Footer />
    </Paper>
  );
}

export default Profile;
