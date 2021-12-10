import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GlobalStyle from './theme/globalStyle';
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
    <Router>

    <div className="App">
      <Header />
      <h1>Hello</h1>
          </div>
    </Router>
    </Fragment>

  );
}

export default App;

