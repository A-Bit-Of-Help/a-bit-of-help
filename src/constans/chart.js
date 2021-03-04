export function userData(NumberOfcommits, commitsWeekDates) {
    return {
        labels: commitsWeekDates,
        datasets: [
            {
                label: "Number of commits: ",
                data: NumberOfcommits,
                borderColor: "#fff",
                borderWidth: 2,
                pointStyle: "circle",
                pointBorderWidth: 1,
                pointBackgroundColor: "#fff",
            },
        ],
    };
}

export const userOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: true,
        text: "Number of commits",
        fontColor: "#fff",
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    fontColor: "#fff",
                    fontSize: 12,
                    maxTicksLimit: 6,
                },
            },
        ],
        xAxes: [
            {
                ticks: {
                    fontColor: "#fff",
                    fontSize: 8.9,
                    maxTicksLimit: 8,
                },
            },
        ],
    },

    legend: {
        display: false,
    },
};
