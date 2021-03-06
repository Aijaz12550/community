import React from "react";
import { Progress } from "../progressBar";
import '../../../styles/invitaionCode/centralComponent.scss'
export const CentralComponent = ({
  children,
  progressbar,
  progress_value,
  steps,
  style,
}) => {
  return (
    <div className="central-component-container">
      <div className="central-component-sub">
        {progressbar != "none" && <Progress step={steps} val={progress_value} />}
        <div className="central-component-sub-2" style={{ ...style }}>
          {children}
        </div>
      </div>
    </div>
  );
};
