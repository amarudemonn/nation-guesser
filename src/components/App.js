import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

class App extends React.Component {
  render() {
    return (
      <div className="ui container" style={{ textAlign: "center" }}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
