import React from "react";
import { useSpring, animated } from "react-spring";

export default function Country(props) {
  return (
    <animated.div
      style={useSpring({ opacity: 1, from: { opacity: 0 } })}
      className="ui centered card"
    >
      <div className="content">
        <p>
          {Math.round(+props.country.probability.toFixed(2) * 100)}% you are
          from{" "}
          <i
            style={{ margin: "0 0.25rem" }}
            className={`${props.country.country_id.toLowerCase()} flag`}
          ></i>{" "}
          {props.country.country_id}
        </p>
      </div>
    </animated.div>
  );
}
