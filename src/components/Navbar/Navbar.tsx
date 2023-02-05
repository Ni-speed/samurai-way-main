import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
console.log(s)
type NavbarPropsType = {
    value: string
}

function Navbar(props: NavbarPropsType) {
    return <nav className={s.nav}>
        <div className={s.navHeader}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Masseges</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
        </div>
        <div className={s.item}>
            <NavLink to='/friends' activeClassName={s.activeLink}>Friends</NavLink>
            <div className={s.bestFriends}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    </nav>
}

export default Navbar;