import React from "react";
import AboutList from "./AboutList";
import AboutSubtitle from "./AboutSubtitle/AboutSubtitle";
import AboutTitle from "./AboutTitle";

const AboutTextContainer = ({ data }) => {
    const {
        titleClass,
        titleText,
        titleSpanText,
        subtitleClass,
        subtitleText,
        listClass,
        sectionName,
    } = data;
    return (
        <section className="text">
            <AboutTitle
                className={titleClass}
                text={titleText}
                spanText={titleSpanText}
            />
            <AboutSubtitle className={subtitleClass} text={subtitleText} />
            <AboutList className={listClass} sectionName={sectionName} />
        </section>
    );
};

export default AboutTextContainer;
