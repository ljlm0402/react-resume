// import modules
import React, { Component } from "react";

// import containers
import { Main } from "./containers";

// import components
import { Footer, Header } from "./components";

export default class App extends Component<{}> {
  render(): JSX.Element {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}
