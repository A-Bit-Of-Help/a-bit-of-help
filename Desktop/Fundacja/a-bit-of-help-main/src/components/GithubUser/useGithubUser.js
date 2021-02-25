import * as React from "react";
import { getGithubUser } from "../../api/";

export function useGithubUser(username) {
    const [user, setUser] = React.useState("");
    React.useEffect(() => {
        const getUserDetails = async () => {
            const data = await getGithubUser(username);
            setUser(data);
        };
        getUserDetails();
    }, []);

    return {
        user,
    };
}
