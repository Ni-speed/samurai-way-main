import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Router} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

function App(props: any) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header title={'d'}/>
                <Navbar value={''}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs wordsDiolog={'dos'}/> }/>
                    <Route path='/profile' render={ () => <Profile titleProfile={'one'}/> }/>
                    <Route path='/news' render={ () => <News wordsNews={'Hello'}/> } />
                    <Route path='/music' render={() => <Music wordsMusic={'Hi, hi hi Hi'}/> }/>
                    <Route path='/settings' render={() => <Settings wordsSettings={'yo yo yo '}/> }/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
