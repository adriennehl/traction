import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Game from './Components/Game/game';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>Welcome to traction!</p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/game">Game</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/game" element={<Game/>}/>
            <Route path="/" element={<Landing/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
