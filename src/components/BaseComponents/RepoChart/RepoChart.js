import * as React from "react";
import { Line } from "react-chartjs-2";

import Loader from "components/BaseComponents/Loader";

import { userData, userOptions } from "constants";
import { useCommitsDates, useConvertingRepoChartData } from "hooks";
import { useContributors } from "./useRepoChart";

const RepoChart = ({ contributors_url }) => {
    const { loadingPage, contributors } = useContributors(contributors_url);
    const repoCommits = useConvertingRepoChartData(contributors);
    const NumberOfcommits = repoCommits.map((item) => item.c);
    const commitsWeekDates = useCommitsDates(repoCommits);
    const data = userData(NumberOfcommits, commitsWeekDates);

    return (
        <div className="repo__chart">
            {loadingPage ? (
                <Loader className="medium" />
            ) : (
                <Line data={data} options={userOptions} />
            )}
        </div>
    );
};

export default RepoChart;
