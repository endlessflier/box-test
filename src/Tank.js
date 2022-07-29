import React from "react";

function Tank(props) {
  return (
    <div className="container">
      <button
        className="button"
        onClick={() => {
          props.setDirection(props.tank.dir);
        }}
      >
        {props.tank.button}
      </button>
      <div className="tank">
        <div
          id="fill"
          className="fill"
          style={{
            height: `${(props.tank.current * 300) / props.tank.volume}px`
          }}
        />
      </div>

      <div
        className="label"
        style={{
          position: `relative`,
          left: `${110}px`,
          top: `${-(props.tank.current * 300) / props.tank.volume}px`
        }}
      >
        {props.tank.current}
      </div>
      <div>{`${props.tank.current} of ${props.tank.volume}`}</div>
    </div>
  );
}

export default React.memo(Tank);
