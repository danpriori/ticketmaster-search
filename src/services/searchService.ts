import { getGenreList, getEventList, getEventDetails } from "./apiService";
import store from "../redux/store/store";

import {
  setGenreListResultState,
  setEventListState,
  setSearchInputState,
  setCurrentEventSelectedIdState,
  setCurrentGenreSelectedIdState,
  setCurrentEventDetailsState,
  setEventItemsShowingState,
  setCurrentPageState,
  addEventItemsShowingState,
} from "../redux/actions/actions";

export function setGenreListResult(result: any) {
  setGenreListResultState(result);
}

export function cleanEventDetailsResult() {
  setCurrentEventSelected(undefined);
  setCurrentEventDetailsState(undefined);
}

export function getCurrentGenreIdSelected() {
  return store.getState().currentGenreIdSelected;
}

export function setCurrentGenreSelected(id: string | undefined) {
  setCurrentGenreSelectedIdState(id);
}

export function setCurrentEventSelected(id: string | undefined) {
  setCurrentEventSelectedIdState(id);
}

export function searchMoreEvents() {
  setCurrentPage(getCurrentPage() + 1);
  searchEvents(getSearchInput(), undefined);
}

export async function searchEvents(
  search: string,
  genreId: string | undefined
) {
  setSearchInput(search);

  let genreIdSelected: string;
  if (genreId === "" || genreId === null || genreId === undefined) {
    genreIdSelected = getCurrentGenreIdSelected();
  } else {
    genreIdSelected = genreId;
    setCurrentGenreSelected(genreIdSelected);
  }
  const result = await getEventList(search, genreIdSelected, getCurrentPage());

  addEventItemsShowing(result.data?._embedded?.events);
}

export function setEventList(result: any) {
  setEventListState(result);
}

export async function retrieveGenreList() {
  const result = await getGenreList();
  setGenreListResult(result.data.segment._embedded.genres);
}

export async function retrieveEventDetails(id: string) {
  setCurrentEventSelected(id);
  const result = await getEventDetails(id);
  setCurrentEventDetailsState(result.data);
}

export function setSearchInput(search: string) {
  setSearchInputState(search);
}

export function getSearchInput() {
  return store.getState().searchInput;
}

export function setEventItemsShowing(items: []) {
  setEventItemsShowingState(items);
}

export function cleanEventItemsShowing() {
  setEventItemsShowingState([]);
}

export function getEventItemsShowing() {
  return store.getState().eventItemsShowing;
}

export function addEventItemsShowing(items: []) {
  addEventItemsShowingState(items);
}

export function setCurrentPage(input: number) {
  setCurrentPageState(input);
}

export function getCurrentPage() {
  return store.getState().currentPage;
}
