import * as React from "react";
import Contributor from "./Contributor";
import Loading from "components/BaseComponents/Loading";

import { useContributors } from "./useContributors";
import "styles/components/contributors.scss";

const Contributors = ({ contributors_url }) => {
    const { loadingPage, contributors } = useContributors(contributors_url);
    return loadingPage ? (
        <Loading />
    ) : (
        <div className="contributors">
            {[...contributors].map((item) => (
                <Contributor key={item.author.id} contributor={item} />
            ))}
        </div>
    );
};

export default Contributors;
