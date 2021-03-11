export function useCommitsDates(commits) {
    const dates = [...commits].map((item) => {
        const date = new Date(item.w * 1000);
        const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
        const month =
            date.getMonth() + 1 > 9
                ? date.getMonth() + 1
                : `0${date.getMonth() + 1}`;
        return `${day}-${month}`;
    });

    return dates;
}
