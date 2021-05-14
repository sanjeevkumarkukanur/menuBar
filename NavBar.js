import { findAllByAltText } from '@testing-library/dom';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
    const [click, setClick]= useState(false);

    const handlerclick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className ="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        Sandy <i className="fab fa-typo3"/>
                    </Link>
                    <div className ='meni-icon' onClick={handlerclick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Servers' className='nav-links' onClick={closeMobileMenu}>
                                Servers
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Prducts' className='nav-links' onClick={closeMobileMenu}>
                                Prducts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign-Up
                            </Link>
                        </li>
                    </ul>
                    {/* {Button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
