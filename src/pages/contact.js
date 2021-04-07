import React from "react";

import Layout from "components/Layout";
import FormContainer from "components/FormContainer";

import { contactData } from "data";

import background from "assets/contact/contact_bcg.png";
import backgroundx2 from "assets/contact/contact_bcg@2x.png";
import "styles/pages/contact.scss";

const Contact = () => (
    <Layout>
        <section className="container contact">
            <FormContainer
                data={contactData.formData}
                emailTitle="Beneficjent"
            />
            <img
                className="contact__background"
                srcSet={`${backgroundx2} 2x`}
                src={background}
                alt="Join Us!"
            />
        </section>
    </Layout>
);

export default Contact;
