import * as React from "react";
import "../../../styles/components/popup.scss";

const UserPopup = ({ popup, setPopup, user }) => {
    // console.log(user);
    return (
        <>
            {popup ? (
                <div className="popup">
                    <div
                        className="popup__close"
                        onClick={() => setPopup(false)}
                    >
                        x
                    </div>
                    <div className="popup__image">
                        <img src={user.avatar_url} alt={user.login} />
                    </div>
                    <div className="popup__login">{user.login}</div>
                    <div className="popup__bio">{user.bio}</div>
                    <div className="popup__location">{user.location}</div>
                    <a href={user.html_url} target="_blank" rel="noreferrer">
                        Go to Github
                    </a>
                </div>
            ) : null}
        </>
    );
};

export default UserPopup;
