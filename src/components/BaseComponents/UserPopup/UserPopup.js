import * as React from "react";
import "../../../styles/components/popup.scss";

const UserPopup = ({ popup, setPopup, user }) => {
    console.log(user);
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
                    <div className="popup__container__left">
                        <div className="popup__image">
                            <img src={user.avatar_url} alt={user.login} />
                            <div className="popup__login">{user.login}</div>
                        </div>
                        <div className="popup__location">{user.location}</div>
                        <div className="popup__bio">{user.bio}</div>
                        <div className="popup__number__repos">
                            Public repositories: {user.public_repos}
                        </div>
                    </div>
                    <div className="popup__container__right">
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="popup__link"
                        >
                            Go to Github
                        </a>
                    </div>
                    <div className="popup__arrow"></div>
                </div>
            ) : null}
        </>
    );
};

export default UserPopup;
