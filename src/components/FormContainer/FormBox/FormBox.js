import * as React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Button from "./Button";
import Form from "./Form";

const FormBox = ({ textareaPlaceholder }) => {
    const [isSubmitting, setIsSubmiting] = React.useState(false);
    const [inputsValue, setInputsValue] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const handleSubmit = React.useCallback(() => {
        if (isSubmitting) return;

        setIsSubmiting(true);
    }, [setIsSubmiting]);

    return (
        <Form handleSubmit={handleSubmit}>
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
            <Button
                isSubmitting={isSubmitting}
                text={isSubmitting ? "wysyłanie..." : "wyślij"}
            />
        </Form>
    );
};

export default FormBox;