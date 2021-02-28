import * as React from "react";
import "styles/components/popup.scss";

const Link = ({ href, target, rel, className, children }) => {
    return (
        <a href={href} target={target} rel={rel} className={className}>
            {children}
        </a>
    );
};

export default Link;
