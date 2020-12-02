import { render } from "@redwoodjs/testing";

import AuthLoginPage from "./AuthLoginPage";

describe("AuthLoginPage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<AuthLoginPage />);
    }).not.toThrow();
  });
});
