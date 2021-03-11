import React from "react";
import classNames from "classnames/bind";

const AboutSubtitle = ({ className, text }) => (
    <h3 className={classNames("about__subtitle", className)}>{text}</h3>
);

export default AboutSubtitle;
// "about__subtitle about__subtitle--top"
