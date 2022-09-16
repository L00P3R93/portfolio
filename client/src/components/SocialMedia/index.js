import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './style.scss'

const SocialMedia = ({label, icon, link}) => {
    const getFAIcon = (faIcon) => {
        switch(faIcon){
            case 'github':
            case 'linkedin-in':
            case 'twitter':
                return (
                    <FontAwesomeIcon
                        icon={['fab', faIcon]}
                        size="2x"
                        fixedWidth
                        className="align-middle"
                    />
                )
            default:
                return (
                    <FontAwesomeIcon icon={faIcon} size="2x" fixedWidth className="align-middle" />
                )
        }
    }

    return (
        <div className="social-media align-middle">
            {getFAIcon(icon)}
            <a href={link} target="_blank" rel="noopener noreferrer">{label}</a>
        </div>
    )
}

export default SocialMedia