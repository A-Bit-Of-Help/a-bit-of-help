import * as React from "react";
import UserPopout from "components/BaseComponents/UserPopup";
import ContributorDetails from "./ContributorDetails";
import { useContributor } from "./useContributor";
import "./style.scss";
import "styles/components/contributor.scss";
import { useOpenClose, useCloseWindow } from "hooks";
import Loader from "components/BaseComponents/Loader";

const Contributor = ({ contributor }) => {
    const { loadingPage, user } = useContributor(contributor.author.url);
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
            {loadingPage ? (
                <Loader className="medium" />
            ) : (
                <>
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
                        contributor={contributor}
                    />
                </>
            )}
        </div>
    );
};

export default Contributor;
