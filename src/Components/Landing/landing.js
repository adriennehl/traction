import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { socket } from '../../socket'; // import connected socket

function Landing (props) {

    const navigate = useNavigate();
    const joinRoom = () => {
        if (props.createRoom) {
            console.log(name);
            socket.emit('create room', name);
        }
        navigate("/teamview");
    }
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        // Listen for socket events
        socket.on('room code', roomCode => {
        console.log("Created room " + roomCode);
        props.setRoomCode(roomCode);
      });
  
    }, []);

    return (
        <div className='flex-container-col' style={{display:'flex', flexDirection:"column"}}>
            <h1 className='title flex-container-row'>Welcome to Traction!</h1>
            {props.createRoom ? null : 
                <div>
                    <p>Room</p>
                    <input placeholder="" style ={{textAlign:"center"}} onChange={event => setRoom(event.target.value)}/>
                    <p>Name</p> 
                </div>
            }
            <input placeholder="" style ={{textAlign:"center"}} onChange={event => setName(event.target.value)}/>
            <Button onClick={joinRoom} variant="secondary" type="submit" style ={{marginTop:10, marginBotton:10}}>
                Enter
            </Button>    
           <Button as={Link} to={"/"} style ={{marginTop:10, marginBotton:10}}>Back</Button>
        </div>
    );
}

export default Landing;