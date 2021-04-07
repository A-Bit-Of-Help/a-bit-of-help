import * as React from "react";
import Contributor from "./Contributor";
import Loader from "components/BaseComponents/Loader";

import { useContributors } from "./useContributors";
import "./style.scss";

const Contributors = ({ contributors_url }) => {
    const { loadingPage, contributors } = useContributors(contributors_url);
    return (
        <div
            className={`contributors ${
                loadingPage ? "contributors--loading" : ""
            }`}
        >
            {loadingPage ? (
                <Loader className="medium" />
            ) : (
                [...contributors].map((item) => (
                    <Contributor key={item.author.id} contributor={item} />
                ))
            )}
        </div>
    );
};

export default Contributors;
