import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Game from './Components/Game/game';
import RoomSelection from './Components/RoomSelection/roomSelection';
import TeamView from './Components/TeamView/teamView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/game" element={<Game/>}/>
            <Route path="/" element={<RoomSelection/>}/>
            <Route path="/createLanding" element={<Landing roomCode={true}/>}/>
            <Route path="/joinLanding" element={<Landing roomCode={false}/>}/>
            <Route path="/teamview" element={<TeamView/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
