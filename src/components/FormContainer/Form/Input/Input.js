import * as React from "react";
import classNames from "classnames/bind";

const Input = ({
    className,
    type = "text",
    name,
    placeholder,
    minLength = "3",
    inputsValue,
    setInputsValue,
}) => {
    const handleInputChangeValue = React.useCallback(
        (event) => {
            setInputsValue({ ...inputsValue, [name]: event.target.value });
        },
        [setInputsValue]
    );

    return (
        <input
            className={classNames("form__input", className)}
            type={type}
            name={name}
            placeholder={placeholder}
            minLength={minLength}
            value={inputsValue[name]}
            onChange={handleInputChangeValue}
            required
        />
    );
};

export default Input;
