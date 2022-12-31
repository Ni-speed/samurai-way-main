import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App(props: any) {
    return (
        <div className='app-wrapper'>
            <Header title={'d'}/>
            <Navbar value={''}/>
            <Profile titleProfile={''}/>
        </div>
    );
}


export default App;
