import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {Friends} from "./components/Friends/Friends";
import {AppPropsType, store,} from "./redux/state";


function App(props: AppPropsType) {

    return <BrowserRouter>
        <div className='app-wrapper'>
            <Header title={'dd'}/>
            <Navbar value={''}/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs wordsDiolog={props.state.dialogPage.dialogsData}
                                                              wordsMessage={props.state.dialogPage.massegesData}
                                                              newMassageText={props.state.dialogPage.newMassageText}
                                                              newMessageTextAC={store.dispatch.bind(store)}/>}/>
                <Route path='/profile' render={() =>
                    <Profile
                        profilePage={props.state.profilePage}
                        addPost={store.dispatch.bind(store)}
                        updateNewPostText={store.dispatch.bind(store)}/>}/>
                <Route path='/news' render={() => <News wordsNews={'Hello'}/>}/>
                <Route path='/music' render={() => <Music wordsMusic={'Hi, hi hi Hi'}/>}/>
                <Route path='/settings' render={() => <Settings wordsSettings={'yo yo yo '}/>}/>
                <Route path='/friends' render={() => <Friends/>}/>

            </div>
        </div>
    </BrowserRouter>

}


export default App;
