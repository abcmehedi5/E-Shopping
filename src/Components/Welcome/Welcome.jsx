import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="d-flex justify-content-center  flex-column welcome-container">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />

      <h4 className="mt-3">WELCOME TO E-SHOPPING</h4>
    </div>
  );
};

export default Welcome;
