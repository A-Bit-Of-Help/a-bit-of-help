import * as React from "react";

const Contributor = ({ contributor }) => {
    console.log(contributor.author);
    return (
        <div className="contributor">
            <a
                href={contributor.author.html_url}
                className="contributor__link"
                target="_blank"
                rel="noreferrer"
            >
                <div className="contributor__avatar">
                    <img
                        src={contributor.author.avatar_url}
                        alt={contributor.author.login}
                    />
                </div>
                <div className="contributor__name">
                    {contributor.author.login}
                </div>
            </a>
            <div className="contributor__commits">
                {contributor.total > 1
                    ? `${contributor.total} commits`
                    : `${contributor.total} commit`}
            </div>
        </div>
    );
};

export default Contributor;
