import React from "react";
import classNames from "classnames/bind";

const AboutTitle = ({ className, text, spanText }) => (
    <h2 className={classNames("about__title", className)}>
        {text}
        <span>{spanText}</span>
    </h2>
);

export default AboutTitle;
