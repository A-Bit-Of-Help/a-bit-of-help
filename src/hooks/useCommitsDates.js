import { monthSupplement, dataDisplayCondition } from "constants";

export function useCommitsDates(commits) {
    const dates = [...commits].map((item) => {
        const date = new Date(item.w * 1000);
        const day =
            date.getDate() > dataDisplayCondition
                ? date.getDate()
                : `0${date.getDate()}`;
        const month =
            date.getMonth() + monthSupplement > dataDisplayCondition
                ? date.getMonth() + monthSupplement
                : `0${date.getMonth() + monthSupplement}`;
        return `${day}-${month}`;
    });

    return dates;
}
