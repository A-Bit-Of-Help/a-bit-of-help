import React from "react";

import Nav from "components/Nav";
import Footer from "components/Footer";

const Layout = ({ children }) => (
    <div className="app">
        <Nav />
        {children}
        <Footer />
    </div>
);

export default Layout;
