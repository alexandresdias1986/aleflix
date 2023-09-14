import React from 'react';
import Logo from '../../../public/imagem/logo.png'
import './menu.css'
import Button from '../Button';


const Menu = () =>{
    return (
        <nav className='menu'>
           <a href="/">
              <img className='logo' src={Logo} alt='AluraFlix Logo'/>
           </a> 
           <Button as='a' className='ButtonLink' href='/'>
                Novo vídeo
           </Button>
            
        </nav>
    )

}

export default Menu