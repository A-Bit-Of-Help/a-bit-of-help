import * as React from "react";
import "styles/components/popup.scss";

const UserPopupItem = ({ href }) => {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="popup__link">
            Go to Github
        </a>
    );
};

export default UserPopupItem;
