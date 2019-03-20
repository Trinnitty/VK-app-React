import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText;
    this.props.setYear(year);
  };

  renderButtonLastFiveYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = 0; i < 5; i++) {
      years.push(currentYear - i);
    }
    return years.map(item => {
      return (
        <button key={item} className="btn" onClick={this.onBtnClick}>
          {item}
        </button>
      );
    });
  };

  displayOutput = () => {
    const { error, photos, isFetching, year } = this.props;

    if (error) {
      return <p>{error}</p>;
    }

    if (isFetching) {
      return <p>LOADING....</p>;
    }
    if (photos.length) {
      return photos.map((item, index) => (
        <div className="page-photo" key={item.id}>
          <img src={item.sizes[1].url} alt="альтернативный текст" />
          <p>Likes {item.likes.count}</p>
        </div>
      ));
    } else if (photos.length === 0 && year) {
      return <p>No photos....</p>;
    }
  };
  render() {
    const { year } = this.props;
    return (
      <div className="page">
        <div>{this.renderButtonLastFiveYears()}</div>

        {year ? (
          <p className="page-column">{year} год</p>
        ) : (
          <p className="page-column">
            Choose year photo of which are you interested to see
          </p>
        )}
        <div className="photos-row"> {this.displayOutput()}</div>
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
