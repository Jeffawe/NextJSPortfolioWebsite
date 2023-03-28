import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
//{project.featuredImage.url}

const SinglePortfolio = ({ project }) => {
    console.log(project.links[0].link1.toString())

    //Checks the Links to see which icon to use
    const CheckLinks = (link) => {
        console.log(link)
        if (link == null) {
            return null
        } else {
            let s_link = link;
            let linkBefore = s_link.split('@')[0];
            const linkAfter = s_link.split('@')[1];
            console.log(s_link)
            //let linkBefore = s_link.split('@')[0];
            if (linkBefore == "Github") {
                return (
                    <a href={linkAfter} key={link}>
                        <BsGithub />
                    </a>
                )
            } else if (linkBefore == "Website") {
                return (
                    <a href={linkAfter} key={link}>
                        <FaGlobe />
                    </a>
                )
            } else if (linkBefore == "itch") {
                return (
                    <a href={linkAfter} key={link}>
                        <FaGlobe />
                    </a>
                )
            } else {
                return (
                    <a href={linkAfter} key={link}>
                        <FaGlobe />
                    </a>
                )
            }
        }
    }

    //Pushes the icons to a new array to display
    const linksToShow = () => {
        let linkArray = []

        linkArray.push(CheckLinks(project.links[0].link1))
        linkArray.push(CheckLinks(project.links[0].link2))
        linkArray.push(CheckLinks(project.links[0].link3))

        return linkArray
    }

    return (
        <div className="project-card">
            <div className="project-img">
                <img src={project.featuredImage.url} alt={project.name} />
                <div className="project-links">
                    {linksToShow()}
                </div>
            </div>
            <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
            </div>
        </div>
    )
}

export default SinglePortfolio
