import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '../../data/project-images'
import './style.scss'

const Project = ({id, title, url, repo, image, lang, tech}) => {
    const displayAsCommaDelimitedList = (arr) => {
        return arr.map((item, i) => {
            return `${item}${(arr.length > 1 && i < arr.length - 1) ? ', ' : ''}`
        })
    }

    return (
        <div className="text-center">
            <a href={url} rel="noopener noreferrer" target="_blank">
                <figure id={id} className="photo-box" style={{'--project-sprite': `url('${image}')`}}>
                    <figcaption className="text-center">{title}</figcaption>
                </figure>
            </a>
            <div className="lang">
                {lang ? displayAsCommaDelimitedList(lang): ' '}
            </div>
            <div className="tech">
                {tech ? displayAsCommaDelimitedList(tech): ' '}
            </div>
            <div className="repo">
                {
                    (repo && repo !== '#0') ? <a href={repo} target="blank"><FontAwesomeIcon icon={['fab','github-alt']} size="lg"/> {repo.slice(19)}</a> : ' '
                }
            </div>
        </div>
    )
}

export default Project