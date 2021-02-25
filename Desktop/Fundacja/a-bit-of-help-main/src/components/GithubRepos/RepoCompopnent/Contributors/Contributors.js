import * as React from "react";
import Contributor from "./Contributor/Contributor";
import { useContributors } from "./useContributors";

const Contributors = ({ contributors_url }) => {
    const { contributors } = useContributors(contributors_url);
    console.log(contributors);
    return (
        <div className="contributors">
            {[...contributors].map((item) => (
                <Contributor key={item.author.id} contributor={item} />
            ))}
        </div>
    );
};

export default Contributors;
