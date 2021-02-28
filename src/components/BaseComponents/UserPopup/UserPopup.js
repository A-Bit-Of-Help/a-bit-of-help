import * as React from "react";
import UserPopupItem from "./UserPopupItem";
import Link from "components/BaseComponents/Link";

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
                        <Link
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="popup__link"
                        >
                            Go to Github
                        </Link>
                    </div>
                    <UserPopupItem className="popup__arrow" />
                </div>
            )}
        </>
    );
};

export default UserPopup;
