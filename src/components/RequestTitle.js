import React from "react";
function RequestTitle() {
    const method = "GET";
    const title = "Comment";
    const url = "https://api.imgur.com/3/comment/123";
    const description = "Get information about a specific comment."
    const styles = `.title-container {
        padding: 12px;
    }
    .method {
        font-size: 16px;
        font-weight: bold;
    }
    .method.post {
        color: rgb(255, 180, 0);
    }
    .method.get {
        color: rgb(12, 187, 82);
    }
    .title {
        color: rgb(40, 40, 40);
        font-size: 16px;
        font-weight: bold;
    }`;
  return (
      <div>
          <style>{styles}</style>
          <div className="title-container">
            <span className={`method ${method.toLowerCase()}` }>{method}</span>
            <span className="title">{title}</span>
        </div>
    </div>
  );
  }
  
  export default RequestTitle;