import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Artist from "./components/Artist/Artist";
import Login from "./components/Login/Login";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Login/>, document.getElementById('root'));
// ReactDOM.render(<Artist image={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/02/11/screen-shot-2018-03-02-at-12.23.53.png?w968h681'} text={'Example'} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
