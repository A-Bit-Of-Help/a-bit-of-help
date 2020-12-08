import React from "react";
import "../styles/pages/about.scss";
import { aboutUsData } from "../db/projects";

const Projects = () => {
    return (
        <div className="container">
            <section className="text">
                <h2 className="about__font-title--top">
                    A bit of help<span>Fundacja</span>
                </h2>
                <h3 className="about__font-subtitle--top">PROJEKTY</h3>
                <ul>
                    {aboutUsData.innovativeSolutions.map((el, index) => (
                        <li key={index} className="about__font-paragraph--top">
                            {el}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="background"></section>
        </div>
    );
};

export default Projects;
