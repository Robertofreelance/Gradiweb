import React from "react";
import "./TopImage.scss";
export default function TopImage(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        padding: props.padding,
        minHeight: props.min,
        fontSize: props.size,
      }}
      className="imgContainer"
    >
      <p className={props.descriptionHigh ? "text-purple" : "text-white"}>
        <i className="fas fa-map-marker-alt"></i>
      </p>

      <div style={{ marginLeft: "10px" }}>
        <p className={props.descriptionHigh ? "text-purple" : "text-white"}>
          <strong>{props.text}</strong>
        </p>
        <p
          className={
            props.descriptionHigh ? "text-purple text-high" : "text-white"
          }
        >
          <strong>{props.description}</strong>
        </p>
      </div>
      {props.adding && <div className="adding">+</div>}
    </div>
  );
}
