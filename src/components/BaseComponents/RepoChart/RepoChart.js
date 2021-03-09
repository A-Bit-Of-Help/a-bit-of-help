import * as React from "react";
import { Line } from "react-chartjs-2";

import Loading from "components/BaseComponents/Loading";

import { userData, userOptions } from "constans";
import { useCommitsDates, useConvertingRepoChartData } from "hooks";
import { useContributors } from "./useRepoChart";

const RepoChart = ({ contributors_url }) => {
    const { loadingPage, contributors } = useContributors(contributors_url);
    const repoCommits = useConvertingRepoChartData(contributors);
    const NumberOfcommits = repoCommits.map((item) => item.c);
    const commitsWeekDates = useCommitsDates(repoCommits);
    const data = userData(NumberOfcommits, commitsWeekDates);

    return loadingPage ? (
        <Loading />
    ) : (
        <div className="repo__chart">
            <Line data={data} options={userOptions} />
        </div>
    );
};

export default RepoChart;
