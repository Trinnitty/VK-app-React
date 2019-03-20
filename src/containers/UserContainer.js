import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { handleLogin } from "../actions/UserActions";

class UserContainer extends Component {
  render() {
    const { user, handleLoginAction } = this.props;
    return (
      <User
        name={user.name}
        error={user.error}
        isFetching={user.isFetching}
        handleLogin={handleLoginAction}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleLoginAction: () => dispatch(handleLogin())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
