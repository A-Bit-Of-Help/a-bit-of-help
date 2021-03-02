import * as React from "react";
import UserPopupItem from "../UserPopupItem";
import Avatar from "components/BaseComponents/Avatar";
import { popupItems } from "constans";

import "styles/components/popup.scss";

const UserPopupLeft = ({ user }) => {
    return (
        <div className="popup__container__left">
            <Avatar src={user.avatar_url} alt={`${user.login} - user avatar`}>
                <UserPopupItem className="popup__login">
                    {user.login}
                </UserPopupItem>
            </Avatar>
            {popupItems(user).map((item) => (
                <UserPopupItem key={item.className} className={item.className}>
                    {item.children}
                </UserPopupItem>
            ))}
        </div>
    );
};

export default UserPopupLeft;
