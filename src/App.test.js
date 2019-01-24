import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { api } from "./componets/panel/Route";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("the data is peanut butter", () => {
  expect.assertions(0);
  return api().then(data => {
    expect(data).not.toBeUndefined();
  });
});
