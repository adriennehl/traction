import React from 'react';
import Card from './card';

function Board(props){
    const cards = [0,0,0,0,0,0,0,0,0,0];
    return(
        <div style ={{backgroundColor: '#6B6F71', margin: '13px', display: 'flex', flexDirection:'column'}}>
            {cards.map(card => (
                <div style = {{display: 'flex', flexDirection:'row'}}>
                    {cards.map(card => (
                            <Card className = 'board-card'/>
                        ))}
                </div>
            ))}
        </div>
    )
}

export default Board;