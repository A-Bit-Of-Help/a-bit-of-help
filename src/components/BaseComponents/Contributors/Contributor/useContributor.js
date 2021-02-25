import * as React from "react";
import { getGithubUser } from "../../../../api";

export function useContributor(contributor_url) {
    const [user, setUser] = React.useState("");
    React.useEffect(() => {
        const getContributorDetails = async () => {
            const data = await getGithubUser(contributor_url);
            setUser(data);
        };
        getContributorDetails();
    }, []);

    return {
        user,
    };
}
