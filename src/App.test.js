import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { api } from "./componets/panel/Route";
import Alert from "./componets/panel/Alert";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount, render, shallow } from "enzyme";
Enzyme.configure({ adapter: new Adapter() });

describe("<MyComponent />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("the data loading", () => {
    expect.assertions(0);
    return api().then(data => {
      expect(data).not.toBeDefined();
    });
  });

  it("should render correctly with no props", () => {
    const Procenty = 0.8,
      MarketName = "BTC-USD",
      d = "2014-07-09T07:19:30.15",
      index = 2;
    const component = shallow(
      <Alert Procenty={Procenty} MarketName={MarketName} d={d} key={index} />
    );
    expect(component).toMatchSnapshot();
  });
});
