import * as React from "react";
import classNames from "classnames/bind";

const Loading = ({ className }) => {
    return <div className={classNames("loading", className)}>Loading..</div>;
};

export default Loading;
