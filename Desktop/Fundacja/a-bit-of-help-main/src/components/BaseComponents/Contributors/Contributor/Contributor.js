import * as React from "react";
import { useContributor } from "./useContributor";
import UserPopout from "../../UserPopup";

const Contributor = ({ contributor }) => {
    const { user } = useContributor(contributor.author.url);
    console.log(user);

    const [popup, setPopup] = React.useState(false);
    return (
        <div className="contributor">
            <div className="contributor__link" onClick={() => setPopup(true)}>
                <div className="contributor__avatar">
                    <img src={user.avatar_url} alt={user.name} />
                </div>
                <div className="contributor__name">{user.name}</div>
                <div className="contributor__login">{user.login}</div>
            </div>
            <div className="contributor__commits">
                {contributor.total > 1
                    ? `${contributor.total} commits`
                    : `${contributor.total} commit`}
            </div>
            <UserPopout popup={popup} setPopup={setPopup} user={user} />
        </div>
    );
};

export default Contributor;
