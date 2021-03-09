import * as React from "react";
import RepoLanguage from "./RepoLanguage";
import RepoLanguagesBar from "./RepoLanguagesBar";
import { useRepoLanguages } from "./useRepoLanguages";
import Loading from "components/BaseComponents/Loading";

import "styles/components/repoLanguages.scss";

const RepoLanguages = ({ repoLanguagesUrl }) => {
    const { loadingPage, languages } = useRepoLanguages(repoLanguagesUrl);

    const programingLanguages = Object.keys(languages).map((key) => ({
        language: key,
        number: languages[key],
    }));

    let languageNumber = 0;
    programingLanguages.forEach((item) => {
        languageNumber += item.number;
    });

    return loadingPage ? (
        <Loading />
    ) : (
        <div className="languages">
            <div className="languages__title"> Languages</div>
            <RepoLanguagesBar
                programingLanguages={programingLanguages}
                languageNumber={languageNumber}
            />
            {programingLanguages.map((item) => (
                <RepoLanguage
                    key={item.language}
                    item={item}
                    languageNumber={languageNumber}
                />
            ))}
        </div>
    );
};

export default RepoLanguages;
