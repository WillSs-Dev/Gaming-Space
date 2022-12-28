import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Library from './pages/Library';
import FAQ from './pages/FAQ'
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
        <Route exact path='/faq' element={<FAQ />} />
      </Routes>
    </div>
  );
}

export default App;
