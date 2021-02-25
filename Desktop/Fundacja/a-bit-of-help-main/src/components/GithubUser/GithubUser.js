import * as React from "react";
import { useGithubUser } from "./useGithubUser";

const GithubUser = () => {
    const { user } = useGithubUser("RafalDrozdz");
    const { id } = user;

    return (
        <>
            <div>{id}</div>
        </>
    );
};

export default GithubUser;
