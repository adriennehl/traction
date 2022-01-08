import React from 'react';
import {Button} from 'react-bootstrap';
import snoopy from './cardPics/snoopy.jpg';

function Card(props){
    return(
        <Button className= {props.className} style = {{backgroundImage: `url(${snoopy})`, backgroundPosition: 'center',
        backgroundSize: 'cover'}}>{props.text}</Button>
    )
}

export default Card;