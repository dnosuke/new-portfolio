import React from "react";
import * as C from "./styles";

export const Qualification = () => {

    return (

        <C.Container>
            <h1>Qualification</h1>
            <span>My personal journey</span>

            <div className="tabs">
                <i className="uil uil-graduation-cap"></i>
                <h3>Education</h3>
                <i className="uil uil-briefcase-alt"></i>
                <h3>Work</h3>
            </div>

            <C.Data>
                <div>
                    <h3>Analise e Desenvolviemnto de Sistemas</h3>
                    <span>IFPI</span>
                    <div className="calendar">
                        <i className="uil uil-calendar-alt"></i>
                        <span>2009 - 2014</span>
                    </div>
                </div>

                <div>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <h3>Sistemas de Informação</h3>
                    <span>UniAmerica Descomplica</span>
                    <div className="calendar">
                        <i className="uil uil-calendar-alt"></i>
                        <span>2022 - 2025</span>
                    </div>
                </div>

                <div>
                    <span></span>
                    <span></span>
                </div>

                <div>
                    <h3>Frontend</h3>
                    <span>Acua</span>
                    <div className="calendar">
                        <i className="uil uil-calendar-alt"></i>
                        <span>2009 - 2014</span>
                    </div>
                </div>

                <div>
                    <span></span>
                </div>
            </C.Data>
        </C.Container>

    )
}