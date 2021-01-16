import { render } from "@redwoodjs/testing";

import LogoMessage from "./LogoMessage";

describe("LogoMessage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<LogoMessage />);
    }).not.toThrow();
  });
});
