import React from "react";
import * as C from "./styles"

export const Contact = () => {

    return (
        <C.Container>
            <h2>Contact me</h2>
            <span>Get in touch</span>
            <i className="uil uil-phone"></i>
            <h3>Call Me</h3>
            <span>(86) 988092235</span>

            <i className="uil uil-envelope"></i>
            <h3>Email</h3>
            <span>alaindelonm@gmail.com</span>

            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" type="text" placeholder="" />
                </div>
            </div>

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="email" placeholder="" value="" />
                </div>
            </div>

            <div className="field">
                <label className="label">Message</label>
                <div className="control">
                    <textarea className="textarea" placeholder=""></textarea>
                </div>
            </div>

            <a href="#contact" className="button">
                Send Message <i className="uil uil-message" ></i>
            </a>

        </C.Container>
    )
}