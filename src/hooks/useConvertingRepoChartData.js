import { defaultCommitValue } from "constans";

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
        if (index === defaultCommitValue) {
            repoCommits = numberOfRepoCommits.map((item) => ({
                w: item.w,
                c: defaultCommitValue,
            }));
        }
        repoCommits.forEach((itemRepo, indexRepo) => {
            itemRepo.c += numberOfRepoCommits[indexRepo].c;
        });
    });

    return repoCommits;
}
