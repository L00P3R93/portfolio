import React from "react";
import './style.scss'

const Intro = () => {
    return (
        <div id="intro" className="d-flex flex-column justify-content-center">
            <div className="name">
                <span className="hi">Hi.</span> My name is <span className="chris">Vincent.</span>
            </div>
            <div className="pers-stmt">
                I'm a <span className="title">&#60;title&#62;Web Developer&#60;&#47;title&#62;,</span>
            </div>
            <div className="pers-stmt">
                passionate about making the world better through code.
            </div>
        </div>
    )
}

export default Intro