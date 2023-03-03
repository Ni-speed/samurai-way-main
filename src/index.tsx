import './index.css';
import {RootStateType, store,} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let renderEntireTree = (_state:RootStateType) => {
    ReactDOM.render(
        <App state={store.getState()}
             // addPost={store.dispatch.bind(store)}
             // updateNewPostText={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)
