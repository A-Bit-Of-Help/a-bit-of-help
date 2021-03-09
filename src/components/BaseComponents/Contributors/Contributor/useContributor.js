import * as React from "react";
import { getGithubUser } from "api";

export function useContributor(contributor_url) {
    const [loadingPage, setLoadingPage] = React.useState(true);
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        const getContributorDetails = async () => {
            const data = await getGithubUser(contributor_url);
            setLoadingPage(false);
            setUser(data);
        };
        getContributorDetails();
    }, [setUser, setLoadingPage]);

    return {
        loadingPage,
        user,
    };
}
