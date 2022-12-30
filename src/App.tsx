import React from 'react';
import './App.css'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App(props: any) {
    return (
        <div className='app-wrapper'>
            <Header title={''}/>
            <Navbar value={''}/>
            <Profile titleProfile={''}/>
        </div>
    );
}


export default App;
