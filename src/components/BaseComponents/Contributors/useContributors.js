import * as React from "react";
import { getContributors } from "api";

export function useContributors(contributors_url) {
    const [loadingPage, setLoadingPage] = React.useState(true);
    const [contributors, setContributors] = React.useState([]);
    React.useEffect(() => {
        const getContributorsDetails = async () => {
            const data = await getContributors(contributors_url);
            setContributors(data);
            setLoadingPage(false);
        };
        getContributorsDetails();
    }, [setContributors, setLoadingPage]);

    return {
        loadingPage,
        contributors,
    };
}
