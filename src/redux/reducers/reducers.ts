import {
  SET_GENRE_LIST,
  SET_SEARCH_INPUT,
  SET_CURRENT_SELECTION_INDEX,
  SET_EVENT_LIST,
  SET_CURRENT_GENRE_SELECTED,
  SET_CURRENT_EVENT_SELECTED,
  SET_CURRENT_EVENT_DETAILS,
  SET_EVENT_ITEMS_SHOWING,
  SET_CURRENT_PAGES,
  ADD_EVENT_ITEMS_SHOWING,
} from "../actions/actionTypes";

export default function rootReducer(state: any, action: any) {
  switch (action.type) {
    case SET_GENRE_LIST:
      return {
        ...state,
        genreListResult: action.payload,
      };

    case SET_SEARCH_INPUT:
      return {
        ...state,
        searchInput: action.payload,
      };

    case SET_CURRENT_SELECTION_INDEX:
      return {
        ...state,
        currentSelectionIndex: action.payload,
      };

    case SET_EVENT_LIST:
      return {
        ...state,
        eventListResult: action.payload,
      };

    case SET_CURRENT_GENRE_SELECTED:
      return {
        ...state,
        currentGenreIdSelected: action.payload,
      };
    case SET_CURRENT_EVENT_SELECTED:
      return {
        ...state,
        currentEventSelected: action.payload,
      };
    case SET_CURRENT_EVENT_DETAILS:
      return {
        ...state,
        currentEventDetails: action.payload,
      };
    case SET_EVENT_ITEMS_SHOWING:
      return {
        ...state,
        eventItemsShowing: action.payload,
      };
    case SET_CURRENT_PAGES:
      return {
        ...state,
        currentPage: action.payload,
      };
    case ADD_EVENT_ITEMS_SHOWING:
      return {
        ...state,
        eventItemsShowing: state.eventItemsShowing.concat(action.payload),
      };
    default:
      return state;
  }
}
