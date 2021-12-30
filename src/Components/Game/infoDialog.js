import React from 'react';
import { Modal} from 'react-bootstrap';

function InfoDialog(props){
    return(
        <Modal show={props.show} onHide={props.onHide} centered>   
            <Modal.Header closeButton/>
            <Modal.Body style={{display: 'flex', flexDirection:'column', textAlign:'center'}}>
                The game instructions....
            </Modal.Body>
        </Modal>
    )
}

export default InfoDialog;