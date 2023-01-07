import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Library from './pages/Library';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import GameDetailsPage from './pages/GameDetailsPage';
import Redirect from './pages/Redirect';
import { useTheme } from '@mui/material';
import './App.css';

function App() {
  const { palette } = useTheme();
  return (
    <div style={{ backgroundColor: palette.background.default }}>
      <Routes>
        <Route exact path='/' element={<Redirect />} />
        <Route exact path='/store' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/library' element={<Library />} />
        <Route exact path='/faq' element={<FAQ />} />
        <Route exact path='/games/:id' element={<GameDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
