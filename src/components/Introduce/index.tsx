import React from "react";
import bat from "../../assets/images/bat.jpg"
import * as C from './styles';

export const Introduce = () => {

    return (
        <C.Container>
            
                
                <div className="social" >
                <a href="https://github.com/" target="_blank">
                <i className="uil uil-github"></i>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                <i className="uil uil-linkedin"></i>
                </a>
                </div>

                <div className="name" id="home">
                    <h1>Hi, I'm Batman</h1>
                    <h2>Frontend Developer</h2>
                    <p>High level experience in web design and
                        development knowledge,<br/> producing quality work. andbecome the most intaknmdauisdbakjsdakbd
                    </p>
                    <a href="#contact" className="button">
                        Contact Me <i className="uil uil-message button__icon" ></i>
                    </a>
                    <a href="#about" className="scroll-button">
                        <i className="uil uil-mouse-alt" id="scroll-mouse"></i>
                        <p className="scroll-name">scroll down</p>
                        <i className="uil uil-arrow-down" id="scroll-arrow"></i>
                    </a>
                </div>

                <img src={bat} />

        </C.Container>
    )
}
