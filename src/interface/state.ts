import IEvent from "./event";

export default interface IState {
  eventListResult?: [];
  genreListResult?: [];
  currentGenreIdSelected?: string;
  currentEventIdSelected?: string;
  currentEventSelected?: IEvent;
  currentEventDetails?: any;
  searchInput?: string;
  initialAllGenreId?: string;
  eventItemsShowing?: [];
  currentPage?: number;
}
