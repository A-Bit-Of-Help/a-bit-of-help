import * as React from "react";
import { useGithubRepos } from "./useGithubRepos";
import RepoCompopnent from "./RepoCompopnent";
import Loader from "components/BaseComponents/Loader";

const GithubRepos = () => {
    const { loadingPage, repos } = useGithubRepos();

    return (
        <div
            className={`github__repos ${
                loadingPage ? "github__repos--loading" : ""
            }`}
        >
            {loadingPage ? (
                <Loader className="large" />
            ) : (
                [...repos].map((item) => (
                    <RepoCompopnent key={item.id} repo={item} />
                ))
            )}
        </div>
    );
};

export default GithubRepos;
