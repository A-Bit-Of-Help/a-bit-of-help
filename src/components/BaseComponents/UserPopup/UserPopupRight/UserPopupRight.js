import * as React from "react";
import UserPopupItem from "../UserPopupItem";
import Link from "components/BaseComponents/Link";

const UserPopupRight = ({ url }) => {
    return (
        <>
            <div className="popup__container__right">
                <Link href={url} className="popup__link">
                    Go to Github
                </Link>
            </div>
        </>
    );
};

export default UserPopupRight;
