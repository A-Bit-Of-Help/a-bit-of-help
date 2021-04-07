import * as React from "react";
import classNames from "classnames/bind";
import { changeInputValue } from "../useChangeInputValue";

const Textarea = ({
    className,
    minLength = "10",
    name = "message",
    placeholder,
    inputsValue,
    setInputsValue,
}) => {
    const handleChange = React.useCallback(
        changeInputValue(name, inputsValue, setInputsValue),
        [inputsValue]
    );

    return (
        <textarea
            className={classNames("form__textarea", className)}
            minLength={minLength}
            name={name}
            placeholder={placeholder}
            value={inputsValue[name]}
            onChange={handleChange}
            required
        />
    );
};

export default Textarea;
