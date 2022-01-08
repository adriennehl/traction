import React, {useState, useEffect} from 'react';
import Board from './BoardComponents/Board';
import TurnBanner from './turnBanner';
import PlayerCardPanel from './playerCardPanel';
import EndDialog from './endDialog';
import { Button } from 'react-bootstrap';
import {socket} from "../../socket";

function Game(props){
    const [winner, setWinner] = useState(null);
    const [showDialog, setShowDialog] = useState(false);
    const endGame = () => {
        setShowDialog(true);
    }
    const removeFromHand = (card) => {
        socket.emit('remove from hand', props.roomCode, props.name, card);
    }
    const placeTile = (pos) => {
        socket.emit('place tile', props.roomCode, props.teamName, pos);
    }
    const removeTile = (pos) => {
        socket.emit('remove tile', props.roomCode, pos);
    }
    const drawCard = () => {
        socket.emit('draw card', props.roomCode, props.name);
    }

    useEffect(() => {
        socket.on('game updated', state => {
            console.log(`Updated state: ${JSON.stringify(state)}`);
            props.setGameState(state);
        });

        socket.on('game end', winner => {
            console.log(`Team ${winner} won!`);
            setWinner(winner);
            endGame();
        })
    }, []);
    return(

        <div className = 'flex-container-col' style ={{backgroundColor:'000000'}}>
            <p>{}</p>
            <TurnBanner teamNum ={1}/>
            <EndDialog show={showDialog} winner={winner} onHide={() => setShowDialog(false)}/>
            {props.gameState == null ? null : <Board board={props.gameState.board}/>}
            <PlayerCardPanel teamNum ={1}/>
            <Button onClick={endGame}>End Game</Button>
        </div>
    )
}

export default Game;