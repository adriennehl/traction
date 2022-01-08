import React from 'react';
import Card from './card';

function Board(props){
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return(
        <div style ={{backgroundColor: '#6B6F71', margin: '13px', display: 'flex', flexDirection:'column', width: '10'}}>
            {nums.map(x => (
                <div style = {{display: 'flex', flexDirection:'row'}}>
                    {nums.map(y => (
                        <Card key ={x + y * 10} text={props.board[x + y * 10].card} className = 'board-card'/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;