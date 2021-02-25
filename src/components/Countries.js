import React from "react";
import Country from "./Country";

export default function Countries(props) {
  return (
    <div>
      <h3 style={{ marginTop: "1rem" }} className="ui header">
        I bet
      </h3>
      {props.countries.map((country) => (
        <Country country={country} />
      ))}
    </div>
  );
}
