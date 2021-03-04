import * as React from "react";
import { Line } from "react-chartjs-2";

import { userData, userOptions } from "constans";

const UserChart = ({ userCommits }) => {
    const NumberOfcommits = userCommits.map((item) => item.c);
    const commitsWeekDates = userCommits.map((item) => {
        const date = new Date(item.w * 1000);
        return `${date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}-${
            date.getMonth() + 1 > 9
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`
        }`;
    });

    const data = userData(NumberOfcommits, commitsWeekDates);

    return (
        <div className="popup__chart">
            <Line data={data} options={userOptions} />
        </div>
    );
};

export default UserChart;
