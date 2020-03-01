import React, { useState } from 'react';
import './Artist.css';

function Artist(props) {
    const [artistText, setArtistText] = useState('');
    return (
        <div class='Artist'>
            <img src={props.image}
                 alt={props.artist}
                 onMouseOver={() => setArtistText(props.artist)}
                 onMouseLeave={() => setArtistText('')}
            ></img>
            <p>{artistText}</p>
        </div>
    )
}

export default Artist;
