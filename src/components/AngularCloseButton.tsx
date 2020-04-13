import React, { Component } from "react";

export default class AngularCloseButton extends Component {
  $rootScope: any;
  container: HTMLDivElement | null | undefined;
  componentDidMount() {
    // @ts-ignore
    this.$rootScope = angular.injector(["ng", "ngApp"]).get("$rootScope");
    // @ts-ignore
    angular.bootstrap(this.container, ["ngApp"]);
  }
  componentWillUnmount() {
    this.$rootScope.$destroy();
  }
  render = () => (
    <div
      ref={(c) => {
        this.container = c;
      }}
      dangerouslySetInnerHTML={{
        __html:
          "<div className='event-details__box__info__close' onClick={this.onClickClose}> Close details </div>",
      }}
    />
  );
}
