import * as React from "react";
import { getRepoLanguages } from "api";

export function useRepoLanguages(repo_languages_url) {
    const [loadingPage, setLoadingPage] = React.useState(true);
    const [languages, setLanguages] = React.useState({});
    React.useEffect(() => {
        const getRepoLanguagesDetails = async () => {
            const data = await getRepoLanguages(repo_languages_url);
            setLoadingPage(false);
            setLanguages(data);
        };
        getRepoLanguagesDetails();
    }, [setLanguages, setLoadingPage]);

    return {
        loadingPage,
        languages,
    };
}
