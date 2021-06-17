import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

import RequestTitle from "./RequestTitle"
import RequestUrl from "./RequestUrl"
import RequestDescription from "./RequestDescription"


function RequestInfo() {
    const method = "GET";
    const title = "Comment";
    const url = "https://api.imgur.com/3/comment/123";
    const description = "Get information about a specific comment."
    const styles = `.my-counter * {
      font-size: 200%;
      }
  
      .container {
          border: 1px solid black;
          width: 50%;
          margin: 30px;
      }`;
  return (
      <div>
          <style>{styles}</style>
          <div className="container">
            <RequestTitle method={method} title={title}/>
            <RequestUrl  url={url}/>
            <RequestDescription description={description}/>
            {/* <RequestButton /> */}
          </div>
      </div>
  );
  }
  
  customElements.define(
    "pm-request-info",
    reactToWebComponent(RequestInfo, React, ReactDOM)
  );

  export default RequestInfo;