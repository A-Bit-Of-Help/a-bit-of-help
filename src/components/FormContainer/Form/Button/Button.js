import * as React from "react";
import classNames from "classnames/bind";

const Button = ({ className, isSubmitting }) => {
    return (
        <button
            className={classNames("form__btn", className)}
            data-btn={isSubmitting ? "wysyłanie..." : "wyślij"}
            disabled={isSubmitting}
        >
            {isSubmitting ? "wysyłanie..." : "wyślij"}
        </button>
    );
};

export default Button;
