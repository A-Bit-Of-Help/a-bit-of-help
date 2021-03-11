import React from "react";
import classNames from "classnames/bind";
import AboutImg from "./AboutImg/AboutImg";
import AboutTextContainer from "./AboutTextContainer";

const AboutSection = ({ data, src, srcSet }) => (
    <section className={classNames("container about", data.sectionClass)}>
        <AboutTextContainer data={data} />
        <AboutImg src={src} srcSet={srcSet} />
    </section>
);

export default AboutSection;
