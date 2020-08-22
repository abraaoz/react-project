import React, { PureComponent } from "react";
import "./Home.less";

class Home extends PureComponent {
  render() {
    return (
      <div className="Home-page">
        <img src="/assets/img/logo.svg" alt="" />
        <p>Page Content</p>
      </div>
    );
  }
}

export default Home;
