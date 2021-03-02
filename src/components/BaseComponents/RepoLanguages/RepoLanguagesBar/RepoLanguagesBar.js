import * as React from "react";

const RepoLanguagesBar = ({ languagesArray, languageNumber }) => {
    return (
        <div className="languages__bar">
            {languagesArray.map((item) => (
                <div
                    key={item.language}
                    className={`languages__bar__${item.language}`}
                    style={{
                        width: `${(item.number / languageNumber) * 100}%`,
                    }}
                />
            ))}
        </div>
    );
};

export default RepoLanguagesBar;
