import React from "react";
import "./error.scss";
interface ErrorProps {}
const ErrorElement = (props: ErrorProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        fontSize: 72,
      }}
    >
      404
    </div>
  );
};

export default ErrorElement;
