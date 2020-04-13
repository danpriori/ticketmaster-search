import store from "../store/store";
import {
  SET_GENRE_LIST,
  SET_SEARCH_INPUT,
  SET_CURRENT_SELECTION_INDEX,
  SET_EVENT_LIST,
  SET_CURRENT_GENRE_SELECTED,
  SET_CURRENT_EVENT_DETAILS,
  SET_EVENT_ITEMS_SHOWING,
  SET_CURRENT_PAGES,
  ADD_EVENT_ITEMS_SHOWING,
} from "./actionTypes";

export function setSearchInputState(input: string) {
  store.dispatch({
    payload: input,
    type: SET_SEARCH_INPUT,
  });
}

export function setGenreListResultState(input: []) {
  store.dispatch({
    payload: input,
    type: SET_GENRE_LIST,
  });
}

export function setCurrentGenreSelectedIdState(input: string | undefined) {
  store.dispatch({
    payload: input,
    type: SET_CURRENT_GENRE_SELECTED,
  });
}

export function setCurrentEventSelectedIdState(input: string | undefined) {
  store.dispatch({
    payload: input,
    type: SET_CURRENT_SELECTION_INDEX,
  });
}

export function setEventListState(input: []) {
  store.dispatch({
    payload: input,
    type: SET_EVENT_LIST,
  });
}

export function setCurrentEventDetailsState(input: any | undefined) {
  store.dispatch({
    payload: input,
    type: SET_CURRENT_EVENT_DETAILS,
  });
}

export function setEventItemsShowingState(input: [] | undefined) {
  store.dispatch({
    payload: input,
    type: SET_EVENT_ITEMS_SHOWING,
  });
}

export function addEventItemsShowingState(input: [] | undefined) {
  store.dispatch({
    payload: input,
    type: ADD_EVENT_ITEMS_SHOWING,
  });
}

export function setCurrentPageState(input: number | 0) {
  store.dispatch({
    payload: input,
    type: SET_CURRENT_PAGES,
  });
}
