import React from "react";
import {TANKS_DATA} from "./constant"

function Tank(props) {
  const tankData = TANKS_DATA[props.index];
  console.log("redered begin", props.index);
  return (
    <div className="container">
      <button
        className="button"
        onClick={() => {
          props.setDirection(tankData.dir);
        }}
      >
        {tankData.button}
      </button>
      <div className="tank">
        <div
          id="fill"
          className="fill"
          style={{
            height: `${(props.tank * 300) / tankData.volume}px`
          }}
        />
      </div>

      <div
        className="label"
        style={{
          position: `relative`,
          left: `${110}px`,
          top: `${-(props.tank * 300) / tankData.volume}px`
        }}
      >
        {props.tank}
      </div>
      <div>{`${props.tank} of ${tankData.volume}`}</div>
    </div>
  );
}

export default React.memo(Tank);
