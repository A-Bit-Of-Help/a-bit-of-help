import * as React from "react";
import Contributors from "components/BaseComponents/Contributors";
import RepoLanguages from "components/BaseComponents/RepoLanguages";

const RepoComponent = ({ repo }) => {
    return (
        <div className="repo">
            <div className="repo__name">{repo.name}</div>
            <RepoLanguages repoLanguagesUrl={repo.languages_url} />
            <Contributors contributors_url={`${repo.url}/stats/contributors`} />
        </div>
    );
};

export default RepoComponent;
