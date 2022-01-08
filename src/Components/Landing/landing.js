import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { socket } from '../../socket'; // import connected socket

function Landing (props) {

    const navigate = useNavigate();
    const joinRoom = () => {
        props.setName(name);
        props.setTeamName("red");
        if (props.createRoom) {
            socket.emit('create room', name);
        }
        else {
            props.setRoomCode(room);
            socket.emit('join room', room, name);
        }
    }
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState(false);

    useEffect(() => {
        // Listen for socket events
        socket.on('room code', roomCode => {
            console.log("Created room " + roomCode);
            props.setRoomCode(roomCode);
            socket.emit('join team', roomCode, name, 'red');
            navigate("/teamview");
        });

        socket.on('room updated', teams => {
            console.log(`Updated teams: ${JSON.stringify(teams)}`);
            props.setTeams(teams);
            navigate("/teamview");
        });
  
        socket.on('invalid room', () => {
            console.log(`Cannot join room ${room}: invalid code.`);
            setErrorMsg(`Cannot join room ${room}: invalid code.`);
            setShowErrorMsg(true);
        });
      
        socket.on('name exists', () => {
            console.log(`Cannot join room ${room}: name already exists.`);
            setErrorMsg(`Cannot join room ${room}: name already exists.`);
            setShowErrorMsg(true);
        });
  
    }, []);

    return (
        <div className='flex-container-col' style={{display:'flex', flexDirection:"column"}}>
            <h1 className='title flex-container-row'>Welcome to Traction!</h1>
            {props.createRoom ? null : 
                <div>
                    <p>Room</p>
                    <input placeholder="" style ={{textAlign:"center"}} onChange={event => setRoom(event.target.value.toUpperCase())}/>
                </div>
            }
            <p>Name</p> 
            <input placeholder="" style ={{textAlign:"center"}} onChange={event => setName(event.target.value)}/>
            <Button onClick={joinRoom} variant="secondary" type="submit" style ={{marginTop:10, marginBotton:10}}>
                Enter
            </Button>    
           <Button as={Link} to={"/"} style ={{marginTop:10, marginBotton:10}}>Back</Button>
           {showErrorMsg ? <p className="error-msg">{errorMsg}</p> : null}
        </div>
    );
}

export default Landing;