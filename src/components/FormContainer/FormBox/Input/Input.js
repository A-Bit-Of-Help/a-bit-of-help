import * as React from "react";
import classNames from "classnames/bind";
import { changeInputValue } from "../useChangeInputValue";

const Input = ({
    className,
    type = "text",
    name,
    placeholder,
    minLength = "3",
    inputsValue,
    setInputsValue,
}) => {
    const handleChange = React.useCallback(
        changeInputValue(name, inputsValue, setInputsValue),
        [inputsValue]
    );

    return (
        <input
            className={classNames("form__input", className)}
            type={type}
            name={name}
            placeholder={placeholder}
            minLength={minLength}
            value={inputsValue[name]}
            onChange={handleChange}
            required
        />
    );
};

export default Input;
