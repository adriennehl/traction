import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Landing from './Components/Landing/landing';
import Game from './Components/Game/game';
import RoomSelection from './Components/RoomSelection/roomSelection';
import TeamView from './Components/TeamView/teamView';
import './App.css';
import {Button} from 'react-bootstrap';
import {useState} from 'react';
import InfoDialog from './Components/Game/infoDialog';

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [roomCode, setRoomCode] = useState("");
  const [name, setName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState({red:[], blue:[], green:[]});
  const [gameState, setGameState] = useState(null);

  return (
    <Router>
      <div className="App">
      <Button onClick={() => setShowInfo(true)} style={{width: '30px', height: '30px', borderRadius: '15px', borderWidth: '0px', position: 'absolute', left: '90%', top: '10%'}}>?</Button>
      <InfoDialog show={showInfo} onHide={()=>setShowInfo(false)}/>  
        <header className="App-header">
          <Routes>
            <Route path="/game" element={<Game  roomCode={roomCode} name={name} teamName={teamName} setGameState={(gameState) => setGameState(gameState)} gameState={gameState}/>}/>
            <Route path="/" element={<RoomSelection/>}/>
            <Route path="/createLanding" element={<Landing createRoom={true} setRoomCode={(code) => setRoomCode(code)} 
              setName={(name) => setName(name)} setTeamName={(team) => setTeamName(team)} setTeams={(teams) => setTeams(teams)}/>}/>
            <Route path="/joinLanding" element={<Landing createRoom={false} setRoomCode={(code) => setRoomCode(code)}
              setName={(name) => setName(name)} setTeamName={(team) => setTeamName(team)} setTeams={(teams) => setTeams(teams)}/>}/>
            <Route path="/teamview" element={<TeamView roomCode={roomCode} name={name} teamName={teamName} teams={teams}
              setTeamName={(team) => setTeamName(team)} setTeams={(teams) => setTeams(teams)} setGameState={(gameState) => setGameState(gameState)}/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
