import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  return (
    <Router>
      <div className="App">
      <Button onClick={() => setShowInfo(true)} style={{width: '30px', height: '30px', borderRadius: '15px', borderWidth: '0px', position: 'absolute', left: '90%', top: '10%'}}>?</Button>
      <InfoDialog show={showInfo} onHide={()=>setShowInfo(false)}/>  
        <header className="App-header">
          <Routes>
            <Route path="/game" element={<Game/>}/>
            <Route path="/" element={<RoomSelection/>}/>
            <Route path="/createLanding" element={<Landing createRoom={true} setRoomCode={(code) => setRoomCode(code)}/>}/>
            <Route path="/joinLanding" element={<Landing createRoom={false} setRoomCode={(code) => setRoomCode(code)}/>}/>
            <Route path="/teamview" element={<TeamView roomCode={roomCode}/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
