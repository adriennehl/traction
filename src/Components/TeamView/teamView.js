import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Team from './team';
import 'bootstrap/dist/css/bootstrap.min.css';
import {socket} from "../../socket";

function TeamView(props){
    const navigate = useNavigate();
    const returnHome = () => {
        navigate("/");
        // socket.emit('leave room', props.roomCode, props.name, props.teamName);
    }
    const joinTeam = (team) => {
        props.setTeamName(team);
        console.log(`room ${props.roomCode} name ${props.name} team ${team}`);
        socket.emit('join team', props.roomCode, props.name, team);
    } 
    const startGame = () => {
        // TODO: check for even teams
        navigate("/game");
        socket.emit('start game', props.roomCode);
    }

    useEffect(() => {
        socket.on('room updated', teams => {
            console.log(`Updated teams: ${JSON.stringify(teams)}`);
            props.setTeams(teams);
        });

        socket.on('game updated', state => {
            console.log(`Updated state: ${JSON.stringify(state)}`);
            props.setGameState(state);
          });
    }, []);

    return(
        <div className = 'flex-container-col' style ={{backgroundColor:'000000'}}>
            <h1 className ='title flex-container-row'>Room {props.roomCode}</h1>
            <Team teamNum = {1} players = {props.teams.red} onClick={()=>joinTeam("red")}/>
            <Team teamNum = {2} players = {props.teams.blue} onClick={()=>joinTeam("blue")}/>
            <Team teamNum = {3} players = {props.teams.green} onClick={()=>joinTeam("green")}/>
            <Button onClick={startGame} style ={{margin:10}}>Begin</Button>
            <Button variant="secondary" onClick={returnHome} style ={{margin:10}}>Back</Button>
        </div>
    )
}

export default TeamView;