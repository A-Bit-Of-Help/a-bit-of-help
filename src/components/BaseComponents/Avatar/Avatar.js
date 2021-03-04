import * as React from "react";
import classNames from "classnames/bind";

const Avatar = ({ src, alt, className, children }) => {
    return (
        <div className={classNames("popup__image", className)}>
            <img src={src} alt={alt} />
            {children}
        </div>
    );
};

export default Avatar;
