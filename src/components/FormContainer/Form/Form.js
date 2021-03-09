import * as React from "react";
import classNames from "classnames/bind";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";

const Form = ({ className, textareaPlaceholder }) => {
    const [isSubmitting, setIsSubmiting] = React.useState(false);
    const [inputsValue, setInputsValue] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        if (isSubmitting) return;

        setIsSubmiting(true);
    };

    return (
        <form
            action="#"
            className={classNames("form__form", className)}
            onSubmit={handleSubmit}
        >
            <Input
                name="name"
                placeholder="Imię"
                inputsValue={inputsValue}
                setInputsValue={setInputsValue}
            />
            <Input
                name="email"
                type="email"
                placeholder="Email"
                inputsValue={inputsValue}
                setInputsValue={setInputsValue}
            />
            <Textarea
                name="message"
                placeholder={textareaPlaceholder}
                inputsValue={inputsValue}
                setInputsValue={setInputsValue}
            />
            <Button isSubmitting={isSubmitting} />
        </form>
    );
};

export default Form;
