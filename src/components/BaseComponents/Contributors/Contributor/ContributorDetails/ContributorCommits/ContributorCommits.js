import * as React from "react";

const ContributorCommits = ({ contributor, added, deleted }) => {
    const MAX_COMMITS = 9999;
    const addedMax = added < MAX_COMMITS ? added : MAX_COMMITS;
    const deletedMax = deleted < MAX_COMMITS ? deleted : MAX_COMMITS;
    return (
        <div className="contributor__container--commits">
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
