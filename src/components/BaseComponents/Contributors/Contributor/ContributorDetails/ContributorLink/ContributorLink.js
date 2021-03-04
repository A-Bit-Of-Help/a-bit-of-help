import * as React from "react";
import Avatar from "components/BaseComponents/Avatar";

const ContributorLink = ({ user, handleClick }) => {
    return (
        <div className="contributor__link" onClick={handleClick}>
            <Avatar
                className="contributor__avatar"
                src={user.avatar_url}
                alt={`${user.login} - user avatar`}
            />
            <div className="contributor__container__name">
                <div className="contributor__name">{user.name}</div>
                <div className="contributor__login">{user.login}</div>
            </div>
        </div>
    );
};

export default ContributorLink;
