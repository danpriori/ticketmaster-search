import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import IState from "../interface/state";
import IEvent from "../interface/event";

import Event from "../components/Event";
import {
  getEventItemsShowing,
  searchMoreEvents,
} from "../services/searchService";

import "../styles/EventsContainer.scss";

class EventsContainer extends Component<IState> {
  static contextTypes: { store: PropTypes.Requireable<object> };

  hasMore: boolean = true;

  fetchMoreData = () => {
    searchMoreEvents();
  };

  render() {
    const eventItemsShowing = this.props.eventItemsShowing;
    const currentEventDetails = this.props.currentEventDetails;

    const rows: any = [];

    if (eventItemsShowing && eventItemsShowing.length > 0) {
      eventItemsShowing.forEach((event: IEvent, index: number) => {
        if (event) {
          this.hasMore = true;
          rows.push(
            <Event
              id={event.id}
              name={event.name}
              images={event.images}
              currentEventDetails={currentEventDetails}
              key={index}
            />
          );
        } else {
          this.hasMore = false;
        }
      });
    }
    return (
      <div className="events">
        <div className="events__box">
          <InfiniteScroll
            dataLength={getEventItemsShowing().length}
            next={this.fetchMoreData}
            hasMore={this.hasMore}
            loader={""}
            style={{ overflowX: "hidden" }}
            endMessage={
              <p className="events__box__end-message">
                <b>Hey dude! You have seen it all</b>
              </p>
            }
          >
            <div className="events__box__event-list">{rows}</div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    eventItemsShowing: state.eventItemsShowing,
    currentEventDetails: state.currentEventDetails,
  };
};

EventsContainer.contextTypes = {
  store: PropTypes.object,
};
export default connect(mapStateToProps, undefined)(EventsContainer);
