import React from "react";

export default function Header() {
  return (
    <header style={{ margin: "1rem 0" }}>
      <h1 className="ui huge header">Hello, I'm Akari!</h1>
      <h2 className="ui large header">
        And I'll try to guess where are you from
      </h2>
      <h3 className="ui medium header">Simply, give me your name</h3>
    </header>
  );
}
