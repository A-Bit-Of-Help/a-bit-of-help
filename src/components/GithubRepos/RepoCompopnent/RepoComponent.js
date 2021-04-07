import * as React from "react";
import Contributors from "components/BaseComponents/Contributors";
import RepoLanguages from "components/BaseComponents/RepoLanguages";
import RepoChart from "components/BaseComponents/RepoChart";

const RepoComponent = ({ repo }) => {
    return (
        <div className="repo">
            <div className="repo__name">{repo.name}</div>
            <div className="repo__wraper">
                <RepoLanguages repoLanguagesUrl={repo.languages_url} />
                <RepoChart
                    contributors_url={`${repo.url}/stats/contributors`}
                />
            </div>

            <Contributors contributors_url={`${repo.url}/stats/contributors`} />
        </div>
    );
};

export default RepoComponent;
