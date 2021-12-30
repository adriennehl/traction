import React from 'react';

function TurnBanner(props){
    const teams = {1: {name : "Red Team", color: '#D45858'}, 2: {name : "Blue Team", color: '#3E9BF0'},
        3:{name : "Green Team", color: '#41D329'}};
    return(
        <div style ={{display: 'flex', backgroundColor: teams[props.teamNum].color, flexDirection:'row'}}>
            <p style = {{margin: '11px', fontSize: '14px', lineHeight:'16.41px'}}>Up next:<br/>Teemo</p>
            <p style={{ margin: '11px', fontSize:'24px', lineHeight:'28.13px', position: 'absolute', left: '40%'}}>Tuna's turn</p>
        </div>
    )
}

export default TurnBanner;