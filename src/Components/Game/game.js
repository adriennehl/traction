import React from 'react';
import Board from '../GameComponents/Board';

function Game(props){
    return(
        <div className = 'flex-container-col' style ={{backgroundColor:'000000'}}>
            <h1 className ='title flex-container-row'>This is the game screen</h1>
            <Board/>
        </div>
    )
}

export default Game;