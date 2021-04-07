import React from "react";

import { navData } from "data";

import "styles/components/nav.scss";
import NavLink from "./NavLink";

const Nav = () => (
    <nav className="nav__container">
        <ul className="nav__list">
            {navData.map((item) => (
                <NavLink key={item.text} item={item} />
            ))}
        </ul>
    </nav>
);

export default Nav;
