import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:9090";

class App extends React.Component {
  state = {
    welcome: ""
  };

  componentDidMount() {
    axios.get("/").then(res => {
      this.setState({
        welcome: res.data
      });
    });
  }

  render() {
    return <div className="app">{this.state.welcome}</div>;
  }
}

export default App;
