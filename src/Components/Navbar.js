import React from 'react'
import logo from '../final.svg';

const Navbar =()=>{
    return(
        <header class="navbar">
          <img src={logo} className="navbar-img" alt="logo" />
          <a className="navbar-home" href="/">Home</a>
            <a className="navbar-explore" href="/explore">Explore</a>
            <a className="navbar-chat" href="/chat">Chat</a>
            <a className="navbar-setting" href="/setting">Setting</a>
            <a className="navbar-about" href="/about">About</a>
        </header>
    )
}

export default Navbar
