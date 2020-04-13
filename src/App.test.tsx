import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { SearchField as Search } from "./components/SearchField";
import EventsContainer from "./containers/EventsContainer";

describe("Search Field Events", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    wrapper.update();
  });
  it("should check if change and keydown events stores search input state", () => {
    const mockEventChange = {
      target: { name: "searchField", value: "ozzy" },
    };
    const mockEventKeyDown = { keyCode: 13, target: { value: "kiss" } };
    const inputField = wrapper.find("input");

    inputField.simulate("change", mockEventChange);
    expect(wrapper.props().store.getState().searchInput).toEqual(
      mockEventChange.target.value
    );

    inputField.simulate("keydown", mockEventKeyDown);
    expect(wrapper.props().store.getState().searchInput).toEqual(
      mockEventKeyDown.target.value
    );

    wrapper.unmount();
  });
});

describe("Creating components ", () => {
  let wrapper: any;
  beforeAll(() => {
    wrapper = mount(
      <Provider store={store}>
        <EventsContainer />
      </Provider>
    );
    wrapper.update();
  });
  it("should create one infinite scroll", () => {
    expect(wrapper.find("InfiniteScroll")).toHaveLength(1);
  });
});
