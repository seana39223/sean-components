import React from 'react';
import './Artist.css';

function Artist(props) {
    console.log(props.image);
    return (
        <div class='Artist'>
            <img src={props.image}></img>
        </div>
    )
}

export default Artist;
