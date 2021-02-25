import React from "react";
import Countries from "./Countries";

import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      loading: false,
      countries: [],
    };
  }

  nameHandler = (e) => {
    this.setState({ name: e.target.value.trim() });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    axios
      .get("https://api.nationalize.io", {
        params: { name: this.state.name },
      })
      .then((res) => {
        this.setState({ loading: false, countries: res.data.country });
      })
      .catch((err) => alert(`Something went wrong\n${err}`));
  };

  render() {
    return (
      <main>
        <form onSubmit={this.onSubmitHandler} className="ui form">
          <div className="field">
            <input
              onChange={this.nameHandler}
              value={this.state.name}
              type="text"
              className="ui input mini"
              required
              placeholder="I am"
              style={{ width: "240px" }}
            />
          </div>
          <button className="ui button violet" type="submit">
            Let Me Think
          </button>
        </form>
        {this.state.loading ? (
          <div
            style={{ marginTop: "1rem" }}
            className="ui active inline loader"
          ></div>
        ) : null}
        {this.state.loading === false && this.state.countries.length !== 0 ? (
          <Countries countries={this.state.countries} />
        ) : null}
      </main>
    );
  }
}

export default Main;
