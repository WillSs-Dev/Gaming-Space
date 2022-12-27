import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';
import Library from './pages/Library.jsx';
import { useTheme } from '@mui/material';
import './App.css';

function App() {
  const { palette } = useTheme();
  return (
    <div style={{ backgroundColor: palette.background.default }}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/library' element={<Library />} />
      </Routes>
    </div>
  );
}

export default App;
