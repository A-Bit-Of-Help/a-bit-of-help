import * as React from "react";
import { getRepoLanguages } from "api";

export function useRepoLanguages(repo_languages_url) {
    const [languages, setLanguages] = React.useState({});
    React.useEffect(() => {
        const getRepoLanguagesDetails = async () => {
            const data = await getRepoLanguages(repo_languages_url);
            setLanguages(data);
        };
        getRepoLanguagesDetails();
    }, []);

    return {
        languages,
    };
}
