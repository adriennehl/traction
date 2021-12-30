import React, {useState} from 'react';
import Board from './BoardComponents/Board';
import TurnBanner from './turnBanner';
import PlayerCardPanel from './playerCardPanel';
import EndDialog from './endDialog';
import { Button } from 'react-bootstrap';

function Game(props){
    const [showDialog, setShowDialog] = useState(false);
    const endGame = () => {
        setShowDialog(true);
    }
    return(

        <div className = 'flex-container-col' style ={{backgroundColor:'000000'}}>
            <TurnBanner teamNum ={1}/>
            <EndDialog show={showDialog} onHide={() => setShowDialog(false)}/>
            <Board/>
            <PlayerCardPanel teamNum ={1}/>
            <Button onClick={endGame}>End Game</Button>
        </div>
    )
}

export default Game;