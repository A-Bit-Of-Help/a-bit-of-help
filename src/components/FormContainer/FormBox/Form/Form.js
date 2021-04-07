import * as React from "react";

const Form = ({ children, handleSubmit }) => {
    return (
        <form action="#" className="form__form" onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;
