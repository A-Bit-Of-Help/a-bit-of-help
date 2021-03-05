export function useConvertingRepoChartData(contributors) {
    let repoCommits = [];
    [...contributors].forEach((item, index) => {
        let numberOfRepoCommits = [];
        item.weeks.forEach((weeksItem, weeksIndex) => {
            numberOfRepoCommits[weeksIndex] = {
                w: weeksItem.w,
                c: weeksItem.c,
            };
        });
        if (index === 0) {
            repoCommits = numberOfRepoCommits.map((item) => ({
                w: item.w,
                c: 0,
            }));
        }
        repoCommits.forEach((itemRepo, indexRepo) => {
            itemRepo.c += numberOfRepoCommits[indexRepo].c;
        });
    });

    return repoCommits;
}
