import React from "react";
import GithubUser from "../components/GithubUser";
import GithubRepos from "../components/GithubRepos";

import "../styles/pages/github.scss";

const Github = () => (
    <>
        <GithubRepos />
        <GithubUser />
    </>
);

export default Github;
