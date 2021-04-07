import * as React from "react";
import classNames from "classnames/bind";

const Button = ({ className, isSubmitting, text }) => {
    return (
        <button
            className={classNames("form__btn", className)}
            data-btn={text}
            disabled={isSubmitting}
        >
            {text}
        </button>
    );
};

export default Button;
