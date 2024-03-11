import React, { useState } from 'react';
import Button from '../Button/Button'
import './Header.css'

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <header>
            <nav className={`nav ${isActive ? 'active' : ''}`}>
                <a href="/" className="logo">&lt;/Thiago&gt;</a>
                <button className="hamburger" onClick={handleHamburgerClick}></button>
                <ul className="nav-list js-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Project</a></li>
                    <Button />
                </ul>
            </nav>
        </header>
    );
};

export default Header;
