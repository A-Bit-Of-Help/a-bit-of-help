import * as React from "react";

const ContributorCommits = ({ contributor, added, deleted }) => {
    const addedMax = added < 99999 ? added : 99999;
    const deletedMax = deleted < 99999 ? deleted : 99999;
    return (
        <div className="contributor__container__commits">
            <div className="contributor__commits">
                {contributor.total > 1
                    ? `${contributor.total} commits`
                    : `${contributor.total} commit`}
            </div>
            <div className="contributor__lines">
                <div className="contributor__added">{addedMax}++</div>
                <div className="contributor__deleted">{deletedMax}--</div>
            </div>
        </div>
    );
};

export default ContributorCommits;
