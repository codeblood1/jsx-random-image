import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">Random Grayscale Images</h1>
    <img src={img + "?grayscale"}></img>
  </div>,
  document.getElementById("root")
);
