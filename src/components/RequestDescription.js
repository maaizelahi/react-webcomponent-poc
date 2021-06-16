// import React from "react";
import { h } from "preact"

function RequestDescription() {
    const description = "Get information about a specific comment."
    const styles = `.desc-container {
        padding: 0px 12px 10px;
    }`;
  return (
      <div>
          <style>{styles}</style>
          <div className="desc-container">{description}</div>
      </div>
  );
  }
  
  export default RequestDescription;