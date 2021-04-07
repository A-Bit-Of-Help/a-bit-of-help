export const changeInputValue = (name, inputsValue, setInputsValue) => (
    event
) => {
    setInputsValue({ ...inputsValue, [name]: event.target.value });
};
