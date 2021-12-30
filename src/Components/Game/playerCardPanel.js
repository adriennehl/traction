import React from 'react';
import Card from './BoardComponents/card';

function PlayerCardPanel(props){
    const teams = {1: {name : "Red Team", color: '#D45858'}, 2: {name : "Blue Team", color: '#3E9BF0'},
        3:{name : "Green Team", color: '#41D329'}};
    return(
        <div style ={{display: 'flex', backgroundColor: teams[props.teamNum].color, flexDirection:'row', justifyContent: "space-evenly"}}>
            <Card className = 'player-card'/>
            <Card className = 'player-card'/>
            <Card className = 'player-card'/>
            <Card className = 'player-card'/>
        </div>
    )
}

export default PlayerCardPanel;