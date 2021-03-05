import * as React from "react";

const RepoLanguage = ({ item, languageNumber }) => {
    const percentOfLanguage = (item.number / languageNumber) * 100;

    return (
        <div className="languages__language">
            <div className="languages__languageText">{item.language}</div>
            <div className="languages__procents">
                {`${percentOfLanguage.toFixed(1)}%`}
            </div>
        </div>
    );
};

export default RepoLanguage;
