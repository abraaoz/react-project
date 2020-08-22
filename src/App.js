import React, { PureComponent } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import routes from "./App.routing";

import "./App.less";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <HelmetProvider>
          <Router>
            <Switch>{routes.map(this.renderPage)}</Switch>
          </Router>
        </HelmetProvider>
      </div>
    );
  }

  renderPage(route) {
    return (
      <Route key={route.path} path={route.path} exact={route.exact}>
        <Helmet>
          <title>React Project | {route.title}</title>
        </Helmet>
        {route.component()}
      </Route>
    );
  }
}

export default App;
