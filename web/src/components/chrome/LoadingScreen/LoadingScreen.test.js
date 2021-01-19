import { render } from "@redwoodjs/testing";

import LoadingScreen from "./LoadingScreen";

describe("LoadingScreen", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<LoadingScreen />);
    }).not.toThrow();
  });
});
