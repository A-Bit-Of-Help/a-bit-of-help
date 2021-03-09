import * as React from "react";
import { getGithubRepos } from "api";

export function useGithubRepos() {
    const [loadingPage, setLoadingPage] = React.useState(true);
    const [repos, setRepos] = React.useState([]);
    React.useEffect(() => {
        const getUserDetails = async () => {
            const data = await getGithubRepos();
            setLoadingPage(false);
            setRepos(data);
        };
        getUserDetails();
    }, [setRepos, setLoadingPage]);

    return {
        loadingPage,
        repos,
    };
}
