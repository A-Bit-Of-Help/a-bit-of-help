import * as React from "react";
import { Line } from "react-chartjs-2";
import { useCommitsDates } from "hooks";

import { userData, userOptions } from "constants";

const UserChart = ({ userCommits }) => {
    const NumberOfcommits = userCommits.map((item) => item.c);
    const commitsWeekDates = useCommitsDates(userCommits);
    const data = userData(NumberOfcommits, commitsWeekDates);

    return (
        <div className="popup__chart">
            <Line data={data} options={userOptions} />
        </div>
    );
};

export default UserChart;
