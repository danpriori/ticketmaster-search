import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import IState from "../interface/state";
import IGenre from "../interface/genre";

import { retrieveGenreList } from "../services/searchService";

import "../styles/GenreListContainer.scss";
import GenreItem from "../components/GenreItem";

class GenresContainer extends Component<IState> {
  static contextTypes: { store: PropTypes.Requireable<object> };

  state = {
    itemsToShow: 5,
    expanded: false,
  };

  componentDidMount() {
    retrieveGenreList();
  }

  showMore = () => {
    const genreList = this.props.genreListResult?.length;
    const itemsToShowNow = genreList ? genreList + 1 : 1;
    this.state.itemsToShow === 5
      ? this.setState({
          itemsToShow: itemsToShowNow,
          expanded: true,
        })
      : this.setState({ itemsToShow: 5, expanded: false });
  };

  render() {
    const genreList = this.props.genreListResult;
    const initialAllGenreId = this.props.initialAllGenreId;
    const initialAllGenreName = "All genres";
    const currentGenreIdSelected = this.props.currentGenreIdSelected;
    const rows = new Array<object>();

    if (genreList && genreList && genreList.length > 0) {
      rows.push(
        <GenreItem
          id={initialAllGenreId}
          key={initialAllGenreId}
          name={initialAllGenreName}
          currentGenreIdSelected={currentGenreIdSelected}
        />
      );
      genreList.forEach((genre: IGenre, index: number | undefined) => {
        rows.push(
          <GenreItem
            id={genre.id}
            key={genre.id}
            name={genre.name}
            currentGenreIdSelected={currentGenreIdSelected}
          />
        );
      });
    }

    return (
      <div className="genre">
        <div className="genre__list">
          {rows.slice(0, this.state.itemsToShow)}
          <div className="genre__show-more">
            <div className="genre__show-more__button" onClick={this.showMore}>
              {this.state.expanded ? <span>Less</span> : <span>More...</span>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    genreListResult: state.genreListResult,
    initialAllGenreId: state.initialAllGenreId,
    currentGenreIdSelected: state.currentGenreIdSelected,
  };
};

GenresContainer.contextTypes = {
  store: PropTypes.object,
};
export default connect(mapStateToProps, undefined)(GenresContainer);
