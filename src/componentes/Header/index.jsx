import React from "react";
import './header.css';
import Logo from '/imagem/logo.png'
import User from '/imagem/user.png'

function Header({black}){
    return (
        <header className={ black ? 'black' : ''}>
           <div className="header--logo">
            <a href="/">
             <img className='logo' src={Logo} alt='AluraFlix Logo'/>
            </a>
           </div>
           <div className="header--user">
            <a href="/">
            <img className='user' src={User} alt='ícone usuário'/>

            </a>

           </div>
        </header>
    )
}

export default Header;