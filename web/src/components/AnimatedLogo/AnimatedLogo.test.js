import { render } from "@redwoodjs/testing";

import AnimatedLogo from "./AnimatedLogo";

describe("AnimatedLogo", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<AnimatedLogo />);
    }).not.toThrow();
  });
});
