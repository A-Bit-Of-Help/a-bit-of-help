import * as React from "react";
import classNames from "classnames/bind";
import "./style.scss";

const Loading = ({ className }) => {
    return <div className={classNames("loading", className)}>Loading..</div>;
};

export default Loading;
