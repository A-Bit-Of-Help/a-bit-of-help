import * as React from "react";
import { getGithubRepos } from "../../api/";

export function useGithubRepos() {
    const [repos, setRepos] = React.useState("");
    React.useEffect(() => {
        const getUserDetails = async () => {
            const data = await getGithubRepos();
            setRepos(data);
        };
        getUserDetails();
    }, []);

    return {
        repos,
    };
}
