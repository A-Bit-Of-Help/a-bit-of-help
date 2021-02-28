import * as React from "react";
import UserPopupItem from "./UserPopupItem";
import UserPopupLink from "./UserPopupLink";

import "styles/components/popup.scss";

const UserPopup = ({ popup, handleClick, user }) => {
    const items = [
        {
            className: "popup__image",
            children: (
                <>
                    <img
                        src={user.avatar_url}
                        alt={`${user.login} - user avatar`}
                    />
                    <div className="popup__login">{user.login}</div>
                </>
            ),
        },
        {
            className: "popup__location",
            children: user.location,
        },
        {
            className: "popup__bio",
            children: user.bio,
        },
        {
            className: "popup__number__repos",
            children: ` Public repositories: ${user.public_repos}`,
        },
    ];

    const userItems = items.map((item) => (
        <UserPopupItem key={item.className} className={item.className}>
            {item.children}
        </UserPopupItem>
    ));

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
                    <div className="popup__container__left">{userItems}</div>
                    <div className="popup__container__right">
                        <UserPopupLink href={user.html_url} />
                    </div>
                    <UserPopupItem className="popup__arrow" />
                </div>
            )}
        </>
    );
};

export default UserPopup;
