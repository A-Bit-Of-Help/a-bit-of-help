import * as React from "react";

const ContributorDetails = ({ user, handleClick }) => {
    return (
        <div className="contributor__link" onClick={handleClick}>
            <div className="contributor__avatar">
                <img
                    src={user.avatar_url}
                    alt={`${user.login} - user avatar`}
                />
            </div>
            <div className="contributor__container__name">
                <div className="contributor__name">{user.name}</div>
                <div className="contributor__login">{user.login}</div>
            </div>
        </div>
    );
};

export default ContributorDetails;
