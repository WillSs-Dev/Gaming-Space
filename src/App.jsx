import { Routes, Route } from 'react-router';
import Home from './pages/Home.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
      </Routes>
    </>
  );
}

export default App;
