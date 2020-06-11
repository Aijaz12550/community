import React from "react";
import { ProgressBar } from "react-bootstrap";

export const Progress = ({ val }) => {
  return (
    <div style={{ width: "100%" }}>
      <ProgressBar variant="success" color="red" now={val} />
    </div>
  );
};
