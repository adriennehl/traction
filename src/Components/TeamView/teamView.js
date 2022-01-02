import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Team from './team';
import 'bootstrap/dist/css/bootstrap.min.css';

function TeamView(props){
    return(
        <div className = 'flex-container-col' style ={{backgroundColor:'000000'}}>
            <h1 className ='title flex-container-row'>Room {props.roomCode}</h1>
            <Team teamNum = {1} players = {["atreen", "teemo", "tuna", "HZTingles"]}/>
            <Team teamNum = {2} players = {["atreen", "teemo", "tuna", "HZTingles"]}/>
            <Team teamNum = {3} players = {["atreen", "teemo", "tuna", "HZTingles"]}/>
            <Button as={Link} to={"/game"} style ={{marginTop:10, marginBotton:10}}>Begin</Button>
        </div>
    )
}

export default TeamView;