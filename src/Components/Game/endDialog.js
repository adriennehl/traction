import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function endDialog(props){
    return(
        <Modal show={props.show} onHide={props.onHide} centered>   
            <Modal.Header closeButton/>
            <Modal.Body style={{display: 'flex', flexDirection:'column', textAlign:'center'}}>
            <Modal.Title>{props.winner} team wins!</Modal.Title>
                <Button as={Link} to={"/"}>Home</Button>
            </Modal.Body>
        </Modal>
    )
}

export default endDialog;