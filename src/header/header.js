import React, {useState} from 'react';
import logo from '../img/logo.png'

const Header = (props) => {

    const header = document.getElementsByClassName("header__main")
    const about = document.getElementsByClassName("about")
    const prices = document.getElementsByClassName("prices")

    const scrollToStart = () => {
        header[0].scrollIntoView({behavior: "smooth"})
    }
    const scrollToAbout = () => {
        about[0].scrollIntoView({behavior: "smooth"})
    }
    const scrollToPrices = () => {
        prices[0].scrollIntoView({behavior: "smooth"})
    }


    return(
        <div className="header__main">
            <div className="header__main-nav">
                <div className="header__main-nav--logo">
                    <img src={logo} className="logo"></img>
                </div>
                <div className="header__main-nav--items">
                    <p className="header__main-nav--item" onClick={scrollToStart}>Sākums</p>
                    <p className="header__main-nav--item" onClick={scrollToAbout}>Par mums</p>
                    <p className="header__main-nav--item" onClick={scrollToPrices}>Cenas</p>
                </div>
            </div>
            <div className="header__main-title">
                <div className="header__main-title__box">
                    <h1 className="header__main-name">Mindra web</h1>
                    <p className="header__main-about">MĀJASLAPAS PRIEKŠ JAUNAJIEM UZŅĒMĒJIEM</p>
                </div>
            </div>
            <div className="white-sharp"></div>
        </div>
    )
}
export default Header