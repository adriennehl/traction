import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function RoomSelection (props) {
    return (
        <div className='flex-container-col'>
            <h1 className='title flex-container-row'>Welcome to Traction!</h1>
            <Button variant='primary' as={Link} to={"/createlanding"} style = {{marginRight: 5, marginLeft: 5}}>Create Room</Button>
            <Button variant='secondary' as={Link} to={"/joinlanding"} style = {{marginRight: 5, marginLeft: 5}}>Join Room</Button>
        </div>
    );
}

export default RoomSelection;