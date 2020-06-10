import React from "react";
import { Progress } from "../progressBar";

export const CentralComponent = ({ children }) => {
  return (
    <div className="central-component-container">
      <div className="central-component-sub">
        <Progress val={20} />
        <div className="central-component-sub-2">{children}</div>
      </div>
    </div>
  );
};
