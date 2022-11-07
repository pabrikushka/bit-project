import React from 'react';
import Container from 'react-bootstrap/Container';
import Logo from '../images/logo'

const Navbar = () => {
    return (
        <nav className='bit-nav'>
            <Container className='nav-container'>
                <div className="nav-content">
                    <a className="navbar-brand" href="#">
                        <Logo className={'brand-logo primary'}/>
                        <Logo className={'brand-logo secondary'}/>
                    </a>
                    <nav className="nav-items">
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                BTC History
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">
                                Book
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Events</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link">Collective</a>
                        </li>
                    </nav>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;