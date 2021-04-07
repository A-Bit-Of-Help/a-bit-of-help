import React from "react";
import { Link } from "gatsby";

import logo from "assets/logoMain.svg";

const Logo = () => (
    <Link to="/">
        <img src={logo} alt="Logo A Bit Of Help" />
    </Link>
);

export default Logo;
