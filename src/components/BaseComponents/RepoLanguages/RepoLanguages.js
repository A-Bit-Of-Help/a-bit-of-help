import * as React from "react";
import RepoLanguage from "./RepoLanguage";
import RepoLanguagesBar from "./RepoLanguagesBar";
import { useRepoLanguages } from "./useRepoLanguages";

import "styles/components/repoLanguages.scss";

const RepoLanguages = ({ repoLanguagesUrl }) => {
    const { languages } = useRepoLanguages(repoLanguagesUrl);

    const languagesArray = Object.keys(languages).map((key) => ({
        language: key,
        number: languages[key],
    }));

    let languageNumber = 0;
    languagesArray.forEach((item) => {
        languageNumber += item.number;
    });

    return (
        <div className="languages">
            <div className="languages__title"> Languages</div>
            <RepoLanguagesBar
                languagesArray={languagesArray}
                languageNumber={languageNumber}
            />
            {languagesArray.map((item) => (
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
