import * as React from "react";
import "../../../styles/components/popup.scss";

const UserPopup = ({ popup, setPopup, user }) => {
    return (
        <>
            {popup ? (
                <>
                    <div
                        className="popup_closer"
                        onClick={() => setPopup(false)}
                    ></div>
                    <div className="popup">
                        <div className="popup__image">
                            <img src={user.avatar_url} alt={user.login} />
                        </div>
                        <div className="popup__name">{user.name}</div>
                        <div className="popup__login">{user.login}</div>
                        <div className="popup__bio">{user.bio}</div>
                        <div className="popup__location">{user.location}</div>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Go to Github
                        </a>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default UserPopup;
