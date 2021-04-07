import * as React from "react";
import classNames from "classnames/bind";
import "./style.scss";

const Loader = ({ className }) => {
    return (
        <div className={classNames("loader", className)}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Loader;
