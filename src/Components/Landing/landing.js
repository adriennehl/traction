import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Landing (props) {
    const navigate = useNavigate();
    const joinRoom = (id) => {
        navigate("/teamview");
    }
    return (
        <div className='flex-container-col'>
            <h1 className='title flex-container-row'>Welcome to Traction!</h1>
            <p>Room</p>
            <Form onSubmit={id => joinRoom(id)}>
                <Form.Group controlId="RoomId">
                {props.roomCode ? <Form.Control placeholder="AAAA" disabled={true} style ={{textAlign:"center"}}/> 
                    : <Form.Control placeholder="" style ={{textAlign:"center"}}/>}
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="" style ={{textAlign:"center"}}/>
                </Form.Group>
                <Button variant="secondary" type="submit" style ={{marginTop:10, marginBotton:10}}>
                    Enter
                </Button>
            </Form>
           <Button as={Link} to={"/"} style ={{marginTop:10, marginBotton:10}}>Back</Button>
        </div>
    );
}

export default Landing;