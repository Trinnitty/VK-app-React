import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.setYear(year);
  };
  render() {
    const { year, photos, isFetching } = this.props;
    return (
      <div className="page">
        <div>
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button>
        </div>

        <p className="page-column">{year} год</p>

        {isFetching ? (
          <p>LOADING....</p>
        ) : (
          <p className="page-column">У тебя {photos.length} фото</p>
        )}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
};
