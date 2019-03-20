import React, { Component } from "react";
import UserContainer from "../containers/UserContainer";
import PageContainer from "../containers/PageContainer";

import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My top photos from VK</h1>
        </header>

        <main>
          <PageContainer />
          <UserContainer />
        </main>
      </div>
    );
  }
}
