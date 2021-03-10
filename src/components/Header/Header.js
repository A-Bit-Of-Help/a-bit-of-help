import React from "react";
import { Link } from "gatsby";

import Nav from "./Nav";

import logo from "assets/logoMain.svg";
import "styles/components/nav.scss";

const Header = () => (
    <header className="container nav">
        <Link to="/">
            <img src={logo} alt="Logo A Bit Of Help" />
        </Link>
        <Nav />
    </header>
);

export default Header;
