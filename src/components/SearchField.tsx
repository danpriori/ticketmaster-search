import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import IState from "../interface/state";
import SearchIcon from "@material-ui/icons/Search";
import "../styles/SearchField.scss";

import {
  searchEvents,
  setSearchInput,
  cleanEventItemsShowing,
  setCurrentPage,
} from "../services/searchService";

export class SearchField extends Component<IState> {
  static contextTypes: { store: PropTypes.Requireable<object> };

  onChange = (e: any) => {
    setSearchInput(e.target.value);
  };

  onKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      cleanEventItemsShowing();
      setCurrentPage(0);
      searchEvents(e.target.value, undefined);
    }
  };

  render() {
    let input = this.props.searchInput;

    return (
      <div className="searchfield">
        <SearchIcon
          style={{ color: "gray" }}
          className="searchfield__search-icon"
        />
        <input
          className="searchfield__search-input"
          id="searchField"
          name="searchField"
          placeholder="Search for events"
          type="text"
          autoComplete="off"
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={input}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    searchInput: state.searchInput,
  };
};

SearchField.contextTypes = {
  store: PropTypes.object,
};
export default connect(mapStateToProps, undefined)(SearchField);
