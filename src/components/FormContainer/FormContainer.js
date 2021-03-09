import React, { useState } from "react";
import { createNewMail } from "api/createNewMail";

import Form from "./Form";

import "styles/components/form.scss";
import FormParagraph from "./FormParagraph";
import Link from "components/BaseComponents/Link/Link";

const FormContainer = ({
    data: { title, paragraphs, textareaPlaceholder, link },
    emailTitle,
}) => {
    return (
        <div className="form">
            <h1 className="form__title">{title}</h1>
            <FormParagraph paragraphs={paragraphs} />
            <Form textareaPlaceholder={textareaPlaceholder} />
            {link && (
                <Link href={link.path} className="form__link">
                    {link.content}
                </Link>
            )}
        </div>
    );
};

export default FormContainer;