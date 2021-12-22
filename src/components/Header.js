import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../img/logo.png';

const Header = () => {
    return (
        <header id="header" className='sticky-top shadow'>
            <nav className="navbar navbar-expand-md navbar-light py-2 shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/newbox">
                        <img src={Logo} alt="NewBox" className="img-fluid logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to="/newbox" aria-current="page" className="nav-link text-uppercase" exact>ANASAYFA</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/product" className="nav-link text-uppercase">ÜRÜNLER</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link text-uppercase">HAKKIMIZDA</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link text-uppercase">İLETİŞİM</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
