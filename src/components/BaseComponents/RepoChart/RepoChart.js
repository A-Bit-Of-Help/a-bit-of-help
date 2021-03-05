import * as React from "react";
import { useContributors } from "./useRepoChart";
import { Line } from "react-chartjs-2";
import { userData, userOptions } from "constans";
import { useCommitsDates, useConvertingRepoChartData } from "hooks";

const RepoChart = ({ contributors_url }) => {
    const { contributors } = useContributors(contributors_url);
    const repoCommits = useConvertingRepoChartData(contributors);
    const NumberOfcommits = repoCommits.map((item) => item.c);
    const commitsWeekDates = useCommitsDates(repoCommits);
    const data = userData(NumberOfcommits, commitsWeekDates);

    return (
        <div className="repo__chart">
            <Line data={data} options={userOptions} />
        </div>
    );
};

export default RepoChart;
