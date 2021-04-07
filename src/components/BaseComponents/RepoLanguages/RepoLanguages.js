import * as React from "react";
import RepoLanguage from "./RepoLanguage";
import RepoLanguagesBar from "./RepoLanguagesBar";
import { useRepoLanguages } from "./useRepoLanguages";
import Loader from "components/BaseComponents/Loader";

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

    return (
        <div className="languages">
            {loadingPage ? (
                <Loader className="medium" />
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};

export default RepoLanguages;
