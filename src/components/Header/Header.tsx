import React from 'react';
import s from './Heade.module.css'
console.log(s)
type HeaderPropsType = {
    title: string
}

function Header(props: HeaderPropsType) {
    return (
        <header className={s.header}>
            <img src='https://cdn.shopify.com/s/files/1/0388/3771/4989/files/DIOR_LOGO.png?v=1653483781'/>
        </header>
    )
}

export default Header;