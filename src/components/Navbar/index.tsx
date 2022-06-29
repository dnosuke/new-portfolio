import React, { useEffect, useState } from "react";
import * as C from './styles'
import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {
    const [burguer, setBurguer] = useState('')

    useEffect(() => {


    }, [burguer])

    function handleBurguer() {
        if (burguer != 'is-active') {
            setBurguer('is-active')
        }else{
            setBurguer('')
        }
    }

    return (
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
           
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    Batman
                </a>

                <a role="button" onClick={handleBurguer} className={`navbar-burger ${burguer}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${burguer}`}>
                <div className="navbar-end" >
                    <a className="navbar-item">
                        <Link
                            activeClass="active"
                            to="home"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Home</Link>
                    </a>

                    <a className="navbar-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>
                    </a>

                    <a className="navbar-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link>
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown" >

                            <a className="navbar-item">
                                <Link
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Skills</Link>
                            </a>
                            <a className="navbar-item">
                                <Link
                                    activeClass="active"
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Portfolio</Link>
                            </a>
                            <a className="navbar-item">
                                <Link
                                    activeClass="active"
                                    to="qualification"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Qualification</Link>
                            </a>
                            <a className="navbar-item">
                                <Link
                                    activeClass="active"
                                    to="footer"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >Footer</Link>
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item" style={{ marginRight: 50}}>
                            <div className="buttons">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
    )
}
