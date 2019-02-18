import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Pages";
import { getPhotos } from "../actions/PageAction";

import "./App.css";

class App extends Component {
  render() {
    const { page, user, getPhotosActions } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My top photos from VK</h1>
        </header>

        <main>
          <Page
            photos={page.photos}
            year={page.year}
            isFetching={page.isFetching}
            setYear={getPhotosActions}
          />
          <User name={user.name} />
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    page: state.page
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotosActions: year => dispatch(getPhotos(year))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
