import * as React from "react";

const RepoLanguage = ({ item, languageNumber }) => {
    return (
        <div className="languages__language">
            <div className="languages__languageText">{item.language}</div>
            <div className="languages__procents">
                {`${((item.number / languageNumber) * 100).toFixed(1)}%`}
            </div>
        </div>
    );
};

export default RepoLanguage;
