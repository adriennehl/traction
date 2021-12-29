import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamView(props){
    return(
        <div className = 'flex-container-col' style ={{backgroundColor:'000000'}}>
            <h1 className ='title flex-container-row'>This is the team view screen</h1>
            <Button as={Link} to={"/game"} style ={{marginTop:10, marginBotton:10}}>Begin</Button>
        </div>
    )
}

export default TeamView;