import * as React from "react";
import { useGithubRepos } from "./useGithubRepos";
import RepoCompopnent from "./RepoCompopnent";

const GithubRepos = () => {
    const { repos } = useGithubRepos();

    return (
        <div className="github__repos">
            {[...repos].map((item) => (
                <RepoCompopnent key={item.id} repo={item} />
            ))}
        </div>
    );
};

export default GithubRepos;
