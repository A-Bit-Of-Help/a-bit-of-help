import React from "react";
import classNames from "classnames/bind";

const AboutList = ({ className, list }) => (
    <ul className="about__list">
        {list.map((item, index) => (
            <li
                key={`${index}${item.slice(0, 33)}`}
                className={classNames("about__paragraph", className)}
            >
                {item}
            </li>
        ))}
    </ul>
);

export default AboutList;
