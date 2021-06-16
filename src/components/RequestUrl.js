import { h } from "preact"

function RequestUri() {
    const url = "https://api.imgur.com/3/comment/123";
    const styles = `.url-container {
        margin: 5px 12px 15px;
        padding: 6px 10px;
        background-color: rgb(248, 248, 248);
        border: 1px solid #ccc;
        font-size: 12px;
    }`;
  return (
      <div>
          <style>{styles}</style>
          <div className="url-container">{url}</div>
      </div>
  );
  }
  
  export default RequestUri;