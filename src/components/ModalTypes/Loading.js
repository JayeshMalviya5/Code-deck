import React from "react";

function Loading() {
  return (
    <div style={{ textAlign: "center", display: "flex", justifyContent: "center" }}>
      <img
        src={require("./Spinner-1s-200px.gif")}
        alt=""
        width={"50px"}
        height={"auto"}
      />
    </div>
  );
}

export default Loading;
