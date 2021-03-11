import React from "react";
import { aboutUsData } from "db/about";
import classNames from "classnames/bind";

const AboutList = ({ className, sectionName }) => (
    <ul className="about__list">
        {aboutUsData[sectionName].map((item, index) => (
            <li
                key={index}
                className={classNames("about__paragraph", className)}
            >
                {item}
            </li>
        ))}
    </ul>
);

export default AboutList;
