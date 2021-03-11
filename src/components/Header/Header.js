import React from "react";

import Nav from "./Nav";

import "styles/components/nav.scss";
import Logo from "./Logo";

const Header = () => (
    <header className="container nav">
        <Logo />
        <Nav />
    </header>
);

export default Header;
