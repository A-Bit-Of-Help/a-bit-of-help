import * as React from "react";
import { useContributor } from "./useContributor";
import UserPopout from "../../UserPopup";
import "../../../../styles/components/contributor.scss";

const Contributor = ({ contributor }) => {
    const { user } = useContributor(contributor.author.url);

    const [popup, setPopup] = React.useState(false);
    const popupRef = React.useRef(null);
    let added = 0,
        deleted = 0;
    contributor.weeks.forEach((element) => {
        added += element.a;
        deleted += element.d;
    });
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setPopup(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef]);

    console.log(contributor);

    return (
        <div className="contributor" ref={popupRef}>
            <div className="contributor__link" onClick={() => setPopup(true)}>
                <div className="contributor__avatar">
                    <img src={user.avatar_url} alt={user.name} />
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
            <UserPopout popup={popup} setPopup={setPopup} user={user} />
        </div>
    );
};

export default Contributor;
