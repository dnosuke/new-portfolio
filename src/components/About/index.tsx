import React from "react";
import * as C from "./styles"
import imgAbout from "../../assets/images/R.jpg"


export const About = () => {

    return (
        <C.Container>

                <h2 id="about">About Me</h2>
                <span>My introducion</span>
            <C.Introducion>
                <img src={imgAbout} />

                <div className="info">
                <span className="text">
                    Web developer, with extensive knowledge and years of experience, working in web technologies and Ui / Ux design, delivering quality work.
                </span>

                <C.Info>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                </C.Info>

                <a href="assets/pdf/" className="button">
                Download CV<i className="uil uil-download-alt"></i>
                </a>
                </div>
            </C.Introducion>

        </C.Container>

    )
}