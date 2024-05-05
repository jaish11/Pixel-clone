import React from "react";
import spinner from "./spinner.gif";

function Loader() {
  return (
    <>
      <div className="img">
        <img src={spinner} alt="loading..." />
      </div>
    </>
  );
}

export default Loader;
