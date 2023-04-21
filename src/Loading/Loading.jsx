import React from "react";
import "./Loading.css";
import { Vortex } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center loading-contaienr">
      <div>
        <Vortex
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    </div>
  );
};

export default Loading;
