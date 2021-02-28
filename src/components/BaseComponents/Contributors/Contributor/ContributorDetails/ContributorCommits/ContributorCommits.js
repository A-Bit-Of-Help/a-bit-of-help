import * as React from "react";

const ContributorDetails = ({ contributor, added, deleted }) => {
    return (
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
    );
};

export default ContributorDetails;
