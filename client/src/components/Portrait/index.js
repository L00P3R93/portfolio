import React from "react";
import './style.scss'

const Portrait = () => {
    return (
        <div id="portrait">
            <img
                src={require('../../assets/images/1x/avatar.sntaks.me.2022.jpg')}
                alt="Developer_IMG"
                className="img-fluid"
            />
        </div>
    )
}

export default Portrait