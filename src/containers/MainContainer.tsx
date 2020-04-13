import React, { Component, Fragment } from "react";

import IState from "../interface/state";

import HeaderContainer from "./HeaderContainer";
import EventsContainer from "./EventsContainer";
import FooterContainer from "./FooterContainer";

import "../styles/MainContainer.scss";

export default class MainContainer extends Component<IState> {
  render() {
    return (
      <Fragment>
        <div className="main-container">
          <div>
            <HeaderContainer />
          </div>
          <div>
            <EventsContainer />
          </div>
          <div>
            <FooterContainer />
          </div>
        </div>
      </Fragment>
    );
  }
}
