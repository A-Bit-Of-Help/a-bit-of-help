import React from "react";

import "styles/pages/hero.scss";
import Title from "./Title";

const Hero = () => (
    <main className="container">
        <header className="header">
            <Title />
            {/* temp div placeholder above */}
            <div className="background-image"></div>
        </header>
    </main>
);

export default Hero;
