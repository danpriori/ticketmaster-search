import React, { Component } from "react";
import { retrieveEventDetails } from "../services/searchService";
import Grow from "@material-ui/core/Grow";

import IEvent from "../interface/event";
import EventDetailsContainer from "../containers/EventDetailsContainer";

import "../styles/Event.scss";

export default class Event extends Component<IEvent> {
  onClick = () => {
    retrieveEventDetails(this.props.id);
  };

  render() {
    const id = this.props.id;
    const name = this.props.name;
    const imageThumbs = this.props.images;
    const currentEventDetails = this.props.currentEventDetails;

    let imageThumb;
    let imageCover;
    if (imageThumbs && imageThumbs.length > 0) {
      imageThumb = imageThumbs.filter((image) => image.ratio === "4_3")[0];
      imageCover = imageThumbs.filter(
        (image) => image.ratio === "16_9" && image.width >= 1024
      )[0];
    }
    if (!imageCover) imageCover = imageThumb;

    return (
      <Grow in={true}>
        <div className="event-item">
          <div
            className={
              "event-item__event-thumb" +
              (currentEventDetails && currentEventDetails.id === id
                ? " event-item__event-thumb__arrow"
                : "")
            }
            onClick={this.onClick}
          >
            <img alt={name} src={imageThumb?.url} />
          </div>
          {currentEventDetails && currentEventDetails.id === id ? (
            <EventDetailsContainer
              name={currentEventDetails.name}
              datetime={currentEventDetails.dates?.start?.dateTime}
              local={currentEventDetails._embedded.venues[0].name}
              city={currentEventDetails._embedded.venues[0].city.name}
              country={currentEventDetails._embedded.venues[0].country.name}
              description={currentEventDetails.description}
              image={imageCover?.url}
            />
          ) : (
            ""
          )}
        </div>
      </Grow>
    );
  }
}
