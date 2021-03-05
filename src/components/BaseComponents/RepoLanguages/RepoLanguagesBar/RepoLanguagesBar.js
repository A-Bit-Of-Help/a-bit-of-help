import * as React from "react";

const RepoLanguagesBar = ({ programingLanguages, languageNumber }) => {
    return (
        <div className="languages__bar">
            {programingLanguages.map((item) => {
                const percentOfLanguage = (item.number / languageNumber) * 100;
                return (
                    <div
                        key={item.language}
                        className={`languages__bar__${item.language}`}
                        style={{
                            width: `${percentOfLanguage}%`,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default RepoLanguagesBar;
