import React from "react";
import { Link } from "gatsby";

import { navNames } from "db/nav";

import "styles/components/nav.scss";

const Nav = () => (
    <nav className="nav__container">
        <ul className="nav__list">
            {navNames.map((item) => (
                <Link to={item.link} className="nav__item" key={item.link}>
                    <li
                        className="nav__list-element"
                        data-navitemcontent={item.text}
                    >
                        {item.text}
                    </li>
                </Link>
            ))}
        </ul>
    </nav>
);

export default Nav;
