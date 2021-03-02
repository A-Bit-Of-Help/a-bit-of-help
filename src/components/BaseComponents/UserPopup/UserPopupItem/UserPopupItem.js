import * as React from "react";

const UserPopupItem = ({ className, children, onClick }) => {
    return (
        <div className={className} onClick={onClick}>
            {children}
        </div>
    );
};

export default UserPopupItem;
