import * as React from "react";
import { useGithubRepos } from "./useGithubRepos";
import RepoCompopnent from "./RepoCompopnent";
import Loading from "components/BaseComponents/Loading/Loading";

const GithubRepos = () => {
    const { loadingPage, repos } = useGithubRepos();

    return loadingPage ? (
        <Loading />
    ) : (
        <div className="github__repos">
            {[...repos].map((item) => (
                <RepoCompopnent key={item.id} repo={item} />
            ))}
        </div>
    );
};

export default GithubRepos;
