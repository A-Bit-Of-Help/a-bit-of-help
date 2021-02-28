import * as React from "react";
import Contributors from "components/BaseComponents/Contributors";

const RepoComponent = ({ repo }) => {
    return (
        <div className="repo">
            <div className="repo__name">{repo.name}</div>
            <Contributors contributors_url={`${repo.url}/stats/contributors`} />
        </div>
    );
};

export default RepoComponent;
