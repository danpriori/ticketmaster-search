import React, { Component } from "react";

import SearchField from "../components/SearchField";
import GenresContainer from "./GenresContainer";

import "../styles/HeaderContainer.scss";

export default class HeaderContainer extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__main-title">Music Events</div>
        <SearchField />
        <GenresContainer />
      </div>
    );
  }
}
