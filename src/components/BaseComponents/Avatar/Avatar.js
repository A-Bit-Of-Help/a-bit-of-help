import * as React from "react";

const Avatar = ({ src, alt, className = "popup__image", children }) => {
    return (
        <div className={className}>
            <img src={src} alt={alt} />
            {children}
        </div>
    );
};

export default Avatar;
