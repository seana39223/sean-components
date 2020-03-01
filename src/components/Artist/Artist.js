import React, { useState } from 'react';
import './Artist.css';

function Artist(props) {
    const [text, setText] = useState('');
    return (
        <div class='Artist'>
            <img src={props.image}
                 onMouseOver={() => setText(props.text)}
                 onMouseLeave={() => setText('')}
            ></img>
            <p>{text}</p>
        </div>
    )
}

export default Artist;
