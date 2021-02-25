import * as React from "react";
import Contributors from "./Contributors";

const RepoComponent = ({ repo }) => {
    console.log(repo);
    return (
        <div className="repo">
            <div className="repo__name">{repo.name}</div>
            <Contributors contributors_url={`${repo.url}/stats/contributors`} />
        </div>
    );
};

export default RepoComponent;
