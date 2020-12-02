import { render } from "@redwoodjs/testing";

import AuthKeyPage from "./AuthKeyPage";

describe("AuthKeyPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<AuthKeyPage />);
    }).not.toThrow();
  });
});
