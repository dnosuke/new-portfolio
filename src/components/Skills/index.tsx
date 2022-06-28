import React from "react";
import * as C from "./styles";

export const Skills = () => {

    return (

        <C.Container>

            <div className="name" id="skills">
                <h2>Skills</h2>
                <span>My technical level</span>
            </div>

            <div className="content-skills">
                <div className="container-skill">
                    <div className="stack">
                        <i className="uil uil-brackets-curly"></i>
                        <div>
                            <h1>Frontend Developer</h1>
                            <span>1 year</span>
                        </div>
                        <i className="uil uil-angle-down"></i>
                    </div>

                    <div className="skill">
                        <h3>HTML</h3>
                        <span>90%</span>
                    </div>
                    <progress className="progress is-small " value="90" max="100"></progress>
                    <div className="skill">
                        <h3>CSS/Styled Components</h3>
                        <span>80%</span>
                    </div>
                    <progress className="progress is-small is-danger" value="70" max="100"></progress>
                    <div className="skill">
                        <h3>Javascript</h3>
                        <span>80%</span>
                    </div>
                    <progress className="progress is-small is-danger" value="80" max="100"></progress>
                    <div className="skill">
                        <h3>React</h3>
                        <span>50%</span>
                    </div>
                    <progress className="progress is-small is-danger" value="50" max="100"></progress>
                </div>
                <div className="container-skill">
                    <div className="stack">
                        <i className="uil uil-brackets-curly"></i>
                        <div>
                            <h1>Backend Developer</h1>
                            <span>1 year</span>
                        </div>
                        <i className="uil uil-angle-down"></i>
                    </div>

                    <div className="skill">
                        <h3>SQL</h3>
                        <span>90%</span>
                    </div>
                    <progress className="progress is-small " value="90" max="100"></progress>
                    <div className="skill">
                        <h3>Node JS</h3>
                        <span>80%</span>
                    </div>
                    <progress className="progress is-small is-danger" value="70" max="100"></progress>
                    <div className="skill">
                        <h3>Python</h3>
                        <span>80%</span>
                    </div>
                    <progress className="progress is-small is-danger" value="80" max="100"></progress>
                    <div className="skill">
                        <h3>Java</h3>
                        <span>50%</span>
                    </div>
                    <progress className="progress is-small is-danger" value="50" max="100"></progress>
                </div>
            </div>
        </C.Container>

    )
}