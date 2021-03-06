import React from "react";
import { ProgressBar } from "react-bootstrap";
import Stepper from 'react-stepper-horizontal';

export const Progress = ({ val, step }) => {
  return (
    <div style={{ width: "100%" }}>
      <Stepper steps={step} activeStep={val} size={20} />
      {/* <ProgressBar variant="success" color="red" now={val} /> */}
    </div>
  );
};
