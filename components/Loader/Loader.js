import React from "react";
import ReactLoading from "react-loading";

export const Loader = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <ReactLoading
        height={"10%"}
        width={"10%"}
        type="bubbles"
        color="#009999"
      />
    </div>
  );
};
