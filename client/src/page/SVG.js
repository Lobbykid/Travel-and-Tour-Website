import * as React from "react";
const SVGComponent = (props) => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    id="hotel"
    data-name="Flat Line"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-line"
    {...props}
  >
    <path
      id="secondary"
      d="M19,3H5A1,1,0,0,0,4,4V21h6V15h4v6h6V4A1,1,0,0,0,19,3Z"
      style={{
        fill: "rgb(44, 169, 188)",
        strokeWidth: 2,
      }}
    />
    <path
      id="primary"
      d="M14,21V15H10v6ZM8,7h2M8,11h2m6-4H14m2,4H14m6,10H4V4A1,1,0,0,1,5,3H19a1,1,0,0,1,1,1Zm1,0H3"
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default SVGComponent;
