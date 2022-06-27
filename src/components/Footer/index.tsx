import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import * as C from "./styles"

export const Footer = () => {

    return (
        <C.Container>
            <div className="name" id="footer">
                <h2>Batman</h2>
                <span>Frontend developer</span>
            </div>

            <ul>
                <li>
                    <a><Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Introduce</Link></a>
                </li>
                <li>
                    <a><Link
                        activeClass="about"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >About</Link></a>
                </li>
                <li>
                    <a><Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >Portfolio</Link></a>
                </li>
            </ul>

            <div className="social">
                <a href="http://www.facebook.com" target="_blank">
                    <i className="uil uil-facebook-f"></i>
                </a>
                <a href="http://www.instagram.com" target="_blank">
                    <i className="uil uil-instagram"></i>
                </a>
                <a href="http://twitter.com" target="_blank">
                    <i className="uil uil-twitter-alt"></i>
                </a>
            </div>

            <p>&#169; Alain. All rights reserved</p>
        </C.Container>
    )
}