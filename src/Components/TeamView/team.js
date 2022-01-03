import React from 'react';
import Button from 'react-bootstrap/Button';

function Team(props){
    const teams = {1: {name : "Red Team", color: '#D45858'}, 2: {name : "Blue Team", color: '#3E9BF0'},
        3:{name : "Green Team", color: '#41D329'}};
    return(
        <div style ={{display: 'flex', backgroundColor: '#5A6164', margin: '5px', flexDirection:'row', borderRadius: 10, borderWidth: 1, borderColor: '#fff'}}>
            <div style ={{ width: '19px', margin: "5px", alignContent: 'center', backgroundColor: teams[props.teamNum].color, borderRadius: 10, borderWidth: 1, borderColor: '#fff'}}/>
            <div style ={{ margin: "5px", alignContent: 'center', alignContent:'center'}}>
                <h1 className ='team-name' style = {{color:teams[props.teamNum].color}}>{teams[props.teamNum].name}</h1>
                {
                    props.players.map(player => (
                        <p key={player} className='player-name'>{player}</p>
                    ))
                }
                <Button onClick={props.onClick}>Join</Button>
            </div>
        </div>
    )
}

export default Team;