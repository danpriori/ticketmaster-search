import React, { Component } from "react";
import moment from "moment";

import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";

import IEventDetails from "../interface/eventDetails";
import { cleanEventDetailsResult } from "../services/searchService";

import "../styles/EventDetails.scss";

export default class EventDetailsContainer extends Component<IEventDetails> {
  onClickClose = () => {
    cleanEventDetailsResult();
  };

  render() {
    const name = this.props.name;
    const image = this.props.image;
    const datetime = this.props.datetime;
    const local = this.props.local;
    const city = this.props.city;
    const country = this.props.country;
    const description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

    const date = moment(datetime);

    const dateText =
      " " +
      date.format("dddd") +
      ", " +
      date.format("DD.MM.YYYY") +
      " @ " +
      date.format("HH.mm");

    const addressText = " " + local + ", " + city + ", " + country;

    return (
      <div className="event-details">
        <div className="event-details__box">
          <div className="event-details__box__info">
            <div className="event-details__box__info__name">{name}</div>
            <div className="event-details__box__info__datetime">
              <DateRangeOutlinedIcon />
              {dateText}
            </div>
            <div className="event-details__box__info__address">
              <LocationCityOutlinedIcon />
              {addressText}
            </div>
            <div className="event-details__box__info__description">
              {description}
            </div>
            <div
              className="event-details__box__info__close"
              onClick={this.onClickClose}
            >
              Close details
            </div>
          </div>
          <div className="event-details__box__cover">
            <img alt={name} src={image} />
          </div>
        </div>
      </div>
    );
  }
}
