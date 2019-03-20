import React, { Component } from "react";
import { connect } from "react-redux";
import { Page } from "../components/Pages";
import { getPhotos } from "../actions/PageAction";

class PageContainer extends Component {
  render() {
    const { page, getPhotosActions } = this.props;

    return (
      <Page
        photos={page.photos}
        year={page.year}
        isFetching={page.isFetching}
        setYear={getPhotosActions}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
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
)(PageContainer);
