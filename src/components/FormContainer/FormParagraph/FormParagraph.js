import * as React from "react";

const FormParagraph = ({ paragraphs }) => {
    return (
        <div className="form__paragraph-container">
            {paragraphs.map((paragraph) => (
                <p className="form__paragraph" key={paragraph.slice(0, 33)}>
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default FormParagraph;
