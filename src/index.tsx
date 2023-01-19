import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let postsData = [
    {id: 1, titlePost: 'Hi it\'s my first post', titleLike: 25},
    {id: 2, titlePost: 'two it\'s my', titleLike: 15},
    {id: 3, titlePost: 'three four 5', titleLike: 45},
]
let dialogsData = [
    {id: 1, name: 'Ilmir'},
    {id: 2, name: 'Kamila'},
    {id: 3, name: 'Aliya'},
    {id: 4, name: 'Insia'},
    {id: 5, name: 'Almaz'}
]
let massegesData = [
    {id: 1, massage: 'Hi!'},
    {id: 2, massage: 'How ara you?'},
    {id: 3, massage: 'I\'am fine'}
]
ReactDOM.render(
    <App postsData={postsData}
         massegesData={massegesData}
         dialogsData={dialogsData}
    />,
    document.getElementById('root')
);