import * as React from "react";
import { useRepoLanguages } from "./useRepoLanguages";

import "styles/components/repoLanguages.scss";

const RepoLanguages = ({ repoLanguagesUrl }) => {
    const { languages } = useRepoLanguages(repoLanguagesUrl);

    const languagesArray = Object.keys(languages).map((key) => ({
        language: key,
        number: languages[key],
    }));
    let langageNumber = 0;
    languagesArray.forEach((item) => {
        langageNumber += item.number;
    });
    return (
        <div className="languages">
            <div className="languages__title"> Languages</div>
            <div className="languages__bar">
                {languagesArray.map((item) => (
                    <div
                        className={`languages__bar__${item.language}`}
                        style={{
                            width: `${(item.number / langageNumber) * 100}%`,
                        }}
                    ></div>
                ))}
            </div>
            {languagesArray.map((item) => (
                <div className="languages__language">
                    <div className="languages__languageText">
                        {item.language}
                    </div>
                    <div className="languages__procents">
                        {`${((item.number / langageNumber) * 100).toFixed(1)}%`}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RepoLanguages;
