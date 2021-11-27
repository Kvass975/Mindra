import React, {useState} from 'react';
import logo from '../img/logo.png'

const Header = (props) => {
    return(
        <div className="header__main">
            <div className="header__main-nav">
                <div className="header__main-nav--logo">
                    <img src={logo} className="logo"></img>
                </div>
                <div className="header__main-nav--items">
                    <p className="header__main-nav--item">Sākums</p>
                    <p className="header__main-nav--item">Par mums</p>
                    <p className="header__main-nav--item">Cenas</p>
                </div>
            </div>
            <div className="header__main-title">
                <div className="header__main-title__box">
                    <h1 className="header__main-name">Mindra web</h1>
                    <p className="header__main-about">MĀJASLAPAS PRIEKŠ JAUNAJIEM UZŅĒMĒJIEM</p>
                </div>
            </div>
        </div>
    )
}
export default Header