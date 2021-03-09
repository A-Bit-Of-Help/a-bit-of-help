import * as React from "react";
import classNames from "classnames/bind";

const Textarea = ({
    className,
    minLength = "10",
    name = "message",
    placeholder,
    inputsValue,
    setInputsValue,
}) => {
    const handleInputChangeValue = (event) => {
        setInputsValue({ ...inputsValue, [name]: event.target.value });
    };

    return (
        <textarea
            className={classNames("form__textarea", className)}
            minLength={minLength}
            name={name}
            placeholder={placeholder}
            value={inputsValue[name]}
            onChange={handleInputChangeValue}
            required
        />
    );
};

export default Textarea;
