import * as React from "react";
import UserPopupItem from "./UserPopupItem";
import UserPopupLeft from "./UserPopupLeft";
import UserPopupRight from "./UserPopupRight";
import UserChart from "./UserChart";

import "styles/components/popup.scss";

const UserPopup = ({ popup, handleClick, user, contributor }) => {
    return (
        <>
            {popup && (
                <div className="popup">
                    <UserPopupItem
                        className="popup__close"
                        onClick={handleClick}
                    >
                        x
                    </UserPopupItem>
                    <UserPopupLeft user={user} />
                    <UserPopupRight url={user.html_url} />
                    <UserChart userCommits={contributor.weeks} />
                    <UserPopupItem className="popup__arrow" />
                </div>
            )}
        </>
    );
};

export default UserPopup;
