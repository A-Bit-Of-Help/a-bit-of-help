import * as React from "react";
import { useGithubRepos } from "./useGithubRepos";
import RepoCompopnent from "./RepoCompopnent";

const GithubRepos = () => {
    const { repos } = useGithubRepos();
    const reposItems = [...repos].map((item) => (
        <RepoCompopnent key={item.id} repo={item} />
    ));
    return <div className="github__repos">{reposItems}</div>;
};

export default GithubRepos;
