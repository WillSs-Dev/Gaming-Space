import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';
import './App.css';
import { useTheme } from '@mui/material';

function App() {
  const { palette } = useTheme();
  return (
    <div style={{ backgroundColor: palette.background.default }}>
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
      </Routes>
    </div>
  );
}

export default App;
