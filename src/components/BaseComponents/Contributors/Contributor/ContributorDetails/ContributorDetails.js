import * as React from "react";

const ContributorDetails = ({
    contributor,
    user,
    handleClick,
    added,
    deleted,
}) => {
    return (
        <>
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
            <div className="contributor__container__commits">
                <div className="contributor__commits">
                    {contributor.total > 1
                        ? `${contributor.total} commits`
                        : `${contributor.total} commit`}
                </div>
                <div className="contributor__lines">
                    <div className="contributor__added">{added}++</div>
                    <div className="contributor__deleted">{deleted}--</div>
                </div>
            </div>
        </>
    );
};

export default ContributorDetails;
