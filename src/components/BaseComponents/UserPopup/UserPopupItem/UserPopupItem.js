import * as React from "react";
import "styles/components/popup.scss";

const UserPopupItem = ({ className, children, onClick }) => {
    return (
        <div className={`${className}`} onClick={onClick}>
            {children}
        </div>
    );
};

export default UserPopupItem;
