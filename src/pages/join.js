import React from "react";

import Layout from "../components/layout";
import Form from "../components/Form";

import { joinData } from "../db/join";

import background from "../assets/join/Zglos-projekt.png";
import backgroundx2 from "../assets/join/Zglos-projekt@2x.png";
import "../styles/pages/join.scss";

const Join = () => (
    <Layout>
        <section className="container join">
            <Form data={joinData.formData} />
            <img
                className="join__background"
                srcSet={`${backgroundx2} 2x`}
                src={background}
                alt="Join Us!"
            />
        </section>
    </Layout>
);

export default Join;
