import { createStore } from "redux";
import rootReducer from "../reducers/reducers";

const initialState = {
  genreListResult: [],
  searchInput: "",
  currentSelectionIndex: 0,
  eventListResult: [],
  eventListResultText: "",
  currentGenreIdSelected: "KZFzniwnSyZfZ7v7nJ",
  initialAllGenreId: "KZFzniwnSyZfZ7v7nJ",
  currentEventSelected: null,
  currentEventDetails: null,
  eventItemsShowing: [],
  currentPage: 0,
};

export default createStore(rootReducer, initialState);
