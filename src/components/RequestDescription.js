import React from "react";

function RequestDescription() {
    const method = "GET";
    const title = "Comment";
    const url = "https://api.imgur.com/3/comment/123";
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