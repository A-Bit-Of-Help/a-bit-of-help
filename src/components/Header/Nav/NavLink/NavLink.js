import React from "react";
import { Link } from "gatsby";

const NavLink = ({ item }) => (
    <Link to={item.link} className="nav__item">
        <li className="nav__list-element" data-navitemcontent={item.text}>
            {item.text}
        </li>
    </Link>
);

export default NavLink;
