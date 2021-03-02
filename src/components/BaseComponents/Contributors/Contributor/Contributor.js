import * as React from "react";
import UserPopout from "components/BaseComponents/UserPopup";
import ContributorDetails from "./ContributorDetails";
import { useContributor } from "./useContributor";
import "styles/components/contributor.scss";
import { useOpenClose, useCloseWindow } from "hooks";

const Contributor = ({ contributor }) => {
    const { user } = useContributor(contributor.author.url);
    const { handleClickClose, handleClickOpen, open } = useOpenClose();
    const { popupRef } = useCloseWindow(handleClickClose);

    let added = 0;
    let deleted = 0;

    contributor.weeks.forEach((element) => {
        added += element.a;
        deleted += element.d;
    });

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
                popup={open}
                handleClick={handleClickClose}
                user={user}
            />
        </div>
    );
};

export default Contributor;
