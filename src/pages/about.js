import React from "react";

import Layout from "components/Layout";

import background from "assets/about/O-fundacji.png";
import backgroundx2 from "assets/about/O-fundacji@2x.png";
import backgroundTeam from "assets/about/TEAM_GRAFIKA.png";
import backgroundTeamx2 from "assets/about/TEAM_GRAFIKA@2x.png";

import "styles/pages/about.scss";
import AboutSection from "components/AboutSection";

import { aboutData } from "data";

const AboutUs = () => {
    return (
        <Layout>
            <AboutSection
                data={aboutData.top}
                src={background}
                srcSet={backgroundx2}
            />
            <div className="about__bottom--container">
                <AboutSection
                    data={aboutData.bottom}
                    src={backgroundTeam}
                    srcSet={backgroundTeamx2}
                />
            </div>
        </Layout>
    );
};

export default AboutUs;
