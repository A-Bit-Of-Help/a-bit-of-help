import axios from "axios";

const API_URL = process.env.GATSBY_API_GITHUB_USERS;

export const getGithubUser = async (username) => {
    const { data } = await axios
        .get(`${API_URL}/${username}`)
        .catch(function (error) {
            throw new Error(`Something goes wrong... ${error.message}`);
        });
    return data;
};
