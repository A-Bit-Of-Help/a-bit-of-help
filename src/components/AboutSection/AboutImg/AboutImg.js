import React from "react";
import classNames from "classnames/bind";

const AboutImg = ({ className, src, srcSet }) => (
    <img
        className={classNames("about__background", className)}
        srcSet={`${srcSet} 2x`}
        src={src}
        alt="About Us!"
    />
);

export default AboutImg;
