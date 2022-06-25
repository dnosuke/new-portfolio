import React from "react";
import * as C from './styles';

export const Introduce = () => {

    return (
        <C.Container>
            <h1>Hi, I'm Batman</h1>
            <h2>Frontend Developer</h2>
            <p>High level experience in web design and development knowledge, producing quality work.
            </p>
            <a href="#contact" className="button">
                Contact Me <i className="uil uil-message button__icon" ></i>
            </a>

    
                <a href="#about" className="scroll-button">
                    <i className="uil uil-mouse-alt" id="scroll-mouse"></i>
                    <p className="scroll-name">scroll down</p>
                    <i className="uil uil-arrow-down" id="scroll-arrow"></i>
                </a>
            
        </C.Container>
    )
}
