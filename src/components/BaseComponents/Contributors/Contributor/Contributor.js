import * as React from "react";
import UserPopout from "components/BaseComponents/UserPopup";
import ContributorDetails from "./ContributorDetails";
import { useContributor } from "./useContributor";
import "styles/components/contributor.scss";

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
                handleClickClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef]);

    const handleClickOpen = React.useCallback(() => {
        setPopup(true);
    }, []);
    const handleClickClose = React.useCallback(() => {
        setPopup(false);
    }, []);

    return (
        <div className="contributor" ref={popupRef}>
            <ContributorDetails
                contributor={contributor}
                user={user}
                handleClick={handleClickOpen}
                added={added}
                deleted={deleted}
            />
            <UserPopout
                popup={popup}
                handleClick={handleClickClose}
                user={user}
            />
        </div>
    );
};

export default Contributor;
