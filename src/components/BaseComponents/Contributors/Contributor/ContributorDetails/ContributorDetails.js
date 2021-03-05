import * as React from "react";
import ContributorLink from "./ContributorLink";
import ContributorCommits from "./ContributorCommits";

const ContributorDetails = ({
    contributor,
    user,
    handleClick,
    added,
    deleted,
}) => {
    return (
        <>
            <ContributorLink user={user} handleClick={handleClick} />
            <ContributorCommits
                contributor={contributor}
                added={added}
                deleted={deleted}
            />
        </>
    );
};

export default ContributorDetails;
