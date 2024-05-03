import React, { useState } from "react";

function TreeFormat({ explorer }) {
  console.log("explorer", explorer);

  const [isShow, setIsShow] = useState(false);

  const fileShowHanlder = () => {
    isShow ? setIsShow(false) : setIsShow(!isShow);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div>
        <span
          style={{ fontSize: "20px", marginRight: "15px" }}
          onClick={() => fileShowHanlder()}>
          {explorer?.isFolder ? "📁" : "📄"}
          {explorer?.name}
        </span>
      </div>
      {isShow && (
        <div style={{ marginLeft: "15px" }}>
          {explorer?.items?.map((each, i) => {
            return <TreeFormat key={each?.id} explorer={each} />;
          })}
        </div>
      )}
    </div>
  );
}

export default TreeFormat;
