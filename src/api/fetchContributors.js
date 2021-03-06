import axios from "axios";

export const getContributors = async (url) => {
    const { data } = await axios.get(`${url}`).catch(function (error) {
        throw new Error(`Something goes wrong... ${error.message}`);
    });
    return data;
};
