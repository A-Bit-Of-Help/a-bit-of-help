import axios from "axios";

const API_URL = process.env.GATSBY_API_GITHUB_REPOS;

export const getGithubRepos = async () => {
    const { data } = await axios.get(`${API_URL}`).catch(function (error) {
        throw new Error(`Something goes wrong... ${error.message}`);
    });
    return data;
};
