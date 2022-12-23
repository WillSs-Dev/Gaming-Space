import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx'
import './App.css';
import { useTheme } from '@mui/material';

function App() {
  const { palette } = useTheme();
  return (
    <div style={{ backgroundColor: palette.background.default }}>
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route exact path="/profile" element={ <Profile /> }/>
      </Routes>
    </div>
  );
}

export default App;
