import React, { Component } from "react";

import IGenre from "../interface/genre";

import {
  searchEvents,
  setCurrentGenreSelected,
  cleanEventItemsShowing,
  setCurrentPage,
  cleanEventDetailsResult,
} from "../services/searchService";

import "../styles/GenreItem.scss";

export default class GenreItem extends Component<IGenre> {
  onClick = () => {
    setCurrentGenreSelected(this.props.id);
    cleanEventItemsShowing();
    cleanEventDetailsResult();
    setCurrentPage(0);
    searchEvents("", this.props.id);
  };
  render() {
    const id = this.props.id;
    const name = this.props.name;
    const currentGenreIdSelected = this.props.currentGenreIdSelected;
    return (
      <div
        className={
          "genre-item" +
          (currentGenreIdSelected === id ? " genre-selected" : "")
        }
        key={id}
        id={id}
        onClick={this.onClick}
      >
        {name}
      </div>
    );
  }
}
